const fs = require('fs');
const puppeteer = require('puppeteer')

function createStepLogger(slideName) {
    const startedAt = Date.now();

    return (message) => {
        const elapsedMs = Date.now() - startedAt;
        console.log(`[${slideName}] +${elapsedMs}ms ${message}`);
    };
}

async function waitForIframes(page, timeoutMs = 30000, perFrameTimeoutMs = 12000) {
    const now = () => Date.now();
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    const startedAt = now();

    const iframeTargets = await page.evaluate(() => {
        const frames = Array.from(document.querySelectorAll('iframe'));
        return frames.map((frame, index) => {
            const rect = frame.getBoundingClientRect();
            const visible = rect.width > 0 && rect.height > 0;
            const dataSrc = frame.getAttribute('data-src') || '';
            const currentSrc = frame.getAttribute('src') || '';

            if (!currentSrc && dataSrc) {
                frame.setAttribute('src', dataSrc);
            }

            const resolvedSrc = frame.getAttribute('src') || dataSrc || '';

            return {
                index,
                visible,
                src: resolvedSrc
            };
        });
    });

    const normalizedUrl = (value) => {
        try {
            const url = new URL(value);
            return `${url.origin}${url.pathname}`;
        } catch {
            return value || '';
        }
    };

    const timeoutByFrame = new Map();
    for (const target of iframeTargets) {
        timeoutByFrame.set(target.index, now() + Math.min(timeoutMs, perFrameTimeoutMs));
    }

    const doneStatus = new Map();
    while (true) {
        const frameCounts = new Map();
        for (const frame of page.frames()) {
            if (!frame.parentFrame()) {
                continue;
            }

            const url = frame.url();
            if (!url || url === 'about:blank') {
                continue;
            }

            const key = normalizedUrl(url);
            frameCounts.set(key, (frameCounts.get(key) || 0) + 1);
        }

        const requiredCounts = new Map();
        for (const target of iframeTargets) {
            if (!target.visible || !target.src || target.src === 'about:blank') {
                continue;
            }
            const key = normalizedUrl(target.src);
            requiredCounts.set(key, (requiredCounts.get(key) || 0) + 1);
        }

        const availableCounts = new Map(frameCounts);
        for (const target of iframeTargets) {
            if (doneStatus.has(target.index)) {
                continue;
            }

            if (!target.src || target.src === 'about:blank') {
                doneStatus.set(target.index, 'skipped-no-src');
                continue;
            }

            if (!target.visible) {
                doneStatus.set(target.index, 'skipped-hidden');
                continue;
            }

            const key = normalizedUrl(target.src);
            const available = availableCounts.get(key) || 0;
            if (available > 0) {
                availableCounts.set(key, available - 1);
                doneStatus.set(target.index, 'loaded');
                continue;
            }

            if (now() >= (timeoutByFrame.get(target.index) || 0)) {
                doneStatus.set(target.index, 'timeout');
            }
        }

        if (doneStatus.size >= iframeTargets.length) {
            break;
        }

        if (now() - startedAt >= timeoutMs) {
            for (const target of iframeTargets) {
                if (!doneStatus.has(target.index)) {
                    doneStatus.set(target.index, 'timeout');
                }
            }
            break;
        }

        await wait(400);
    }

    await wait(1200);

    const results = iframeTargets.map(target => ({
        index: target.index,
        src: target.src,
        visible: target.visible,
        status: doneStatus.get(target.index) || 'timeout',
        elapsedMs: Math.max(0, Math.min(now() - startedAt, perFrameTimeoutMs))
    }));

    return {
        totalFrames: iframeTargets.length,
        totalWaitMs: now() - startedAt,
        results
    };
}

async function main() {
    const slideName = process.env.SLIDE_NAME;
    const log = createStepLogger(slideName);
    const url = `https://bfritscher.github.io/cours-pweb-slides/${slideName}.html?print-pdf`;
    const outputPath = `/home/pptruser/pdf/${slideName}.pdf`;

    log('Launching browser');
    const browser = await puppeteer.launch({ headless: 'new' });

    try {
        log('Opening new page');
        const page = await browser.newPage();

        log(`Navigating to ${url}`);
        await page.goto(url, {
            waitUntil: 'networkidle0',
            timeout: 120000
        });
        log('Navigation done');

        log('Waiting for document fonts');
        await page.evaluate(async () => {
            if (document.fonts?.ready) {
                await document.fonts.ready;
            }
        });
        log('Fonts ready');

        log('Waiting for iframe content readiness');
        const iframeReport = await waitForIframes(page, 30000, 12000);
        const iframeCounts = iframeReport.results.reduce((acc, item) => {
            acc[item.status] = (acc[item.status] || 0) + 1;
            return acc;
        }, {});
        log(`Iframes settled in ${iframeReport.totalWaitMs}ms: ${JSON.stringify(iframeCounts)}`);
        const unresolvedFrames = iframeReport.results
            .filter(item => item.status === 'timeout' || item.status === 'error')
            .map(item => `${item.status}#${item.index}:${item.src}`)
            .slice(0, 8);
        if (unresolvedFrames.length > 0) {
            log(`Iframe unresolved sample: ${unresolvedFrames.join(' | ')}`);
        }

        log('Rendering PDF');
        const pdf = await page.pdf({ format: 'A4' });
        log(`PDF rendered (${pdf.length} bytes)`);

        log(`Writing file to ${outputPath}`);
        await fs.promises.writeFile(outputPath, pdf);
        log('PDF file saved');
    } finally {
        log('Closing browser');
        await browser.close();
        log('Done');
    }
}
main();
