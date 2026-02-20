#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const showAll = args.includes('--all');
const positionalArgs = args.filter(arg => !arg.startsWith('--'));
const rootDir = positionalArgs[0] ? path.resolve(positionalArgs[0]) : process.cwd();
const timeoutMs = Number(positionalArgs[1] || 10000);

function walkMarkdownFiles(dirPath, seenFilePaths = new Set()) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            files.push(...walkMarkdownFiles(fullPath, seenFilePaths));
            continue;
        }

        if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
            const normalizedPath = path.resolve(fullPath).toLowerCase();
            if (!seenFilePaths.has(normalizedPath)) {
                seenFilePaths.add(normalizedPath);
                files.push(fullPath);
            }
        }
    }

    return files;
}

function normalizeCandidate(rawUrl) {
    return rawUrl
        .trim()
    .replace(/[)>\]}"'`.,;:!?]+$/g, '')
    .replace(/^<+|>+$/g, '');
}

function extractUrlOccurrences(content) {
    const regex = /https?:\/\/[^\s<>(){}\[\]"']+/gi;
    const occurrences = [];

    const lineStarts = [0];
    for (let index = 0; index < content.length; index += 1) {
        if (content[index] === '\n') {
            lineStarts.push(index + 1);
        }
    }

    function getLineNumber(charIndex) {
        let low = 0;
        let high = lineStarts.length - 1;

        while (low <= high) {
            const middle = Math.floor((low + high) / 2);
            if (lineStarts[middle] <= charIndex) {
                low = middle + 1;
            } else {
                high = middle - 1;
            }
        }

        return high + 1;
    }

    let match;

    while ((match = regex.exec(content)) !== null) {
        const normalized = normalizeCandidate(match[0]);
        if (normalized) {
            occurrences.push({
                url: normalized,
                line: getLineNumber(match.index)
            });
        }
    }

    return occurrences;
}

function formatLocations(locationMap) {
    const formatted = [];
    const files = [...locationMap.keys()].sort();

    for (const file of files) {
        const lines = [...new Set(locationMap.get(file))].sort((a, b) => a - b);
        formatted.push(`${file}:${lines.join(',')}`);
    }

    return formatted.join(' | ');
}

async function fetchWithTimeout(url, options, timeout) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    try {
        return await fetch(url, { ...options, signal: controller.signal, redirect: 'follow' });
    } finally {
        clearTimeout(timer);
    }
}

async function checkUrl(url) {
    try {
        let response = await fetchWithTimeout(url, { method: 'HEAD' }, timeoutMs);

        if (response.status === 405 || response.status === 501) {
            response = await fetchWithTimeout(url, { method: 'GET' }, timeoutMs);
        }

        return {
            url,
            ok: response.status < 400,
            status: response.status,
            statusText: response.statusText || ''
        };
    } catch (error) {
        return {
            url,
            ok: false,
            status: 'ERR',
            statusText: error && error.message ? error.message : 'Unknown error'
        };
    }
}

async function main() {
    if (!fs.existsSync(rootDir) || !fs.statSync(rootDir).isDirectory()) {
        console.error(`Invalid folder: ${rootDir}`);
        process.exit(2);
    }

    const markdownFiles = walkMarkdownFiles(rootDir)
        .sort((a, b) => a.localeCompare(b));
    const urlToLocations = new Map();

    for (const filePath of markdownFiles) {
        const content = fs.readFileSync(filePath, 'utf8');
        const occurrences = extractUrlOccurrences(content);
        const relativeFilePath = path.relative(rootDir, filePath);

        for (const occurrence of occurrences) {
            if (!urlToLocations.has(occurrence.url)) {
                urlToLocations.set(occurrence.url, new Map());
            }

            const locationMap = urlToLocations.get(occurrence.url);
            if (!locationMap.has(relativeFilePath)) {
                locationMap.set(relativeFilePath, []);
            }

            locationMap.get(relativeFilePath).push(occurrence.line);
        }
    }

    const uniqueUrls = [...urlToLocations.keys()];
    if (uniqueUrls.length === 0) {
        console.log('No absolute http/https URLs found in markdown files.');
        return;
    }

    console.log(`Checking ${uniqueUrls.length} unique URL(s) from ${markdownFiles.length} markdown file(s)...\n`);

    const results = [];
    const emittedLogSignatures = new Set();
    for (const url of uniqueUrls) {
        const result = await checkUrl(url);
        results.push(result);
        const locations = formatLocations(urlToLocations.get(url) || new Map());
        const signature = `${result.ok ? 'OK' : 'BAD'}|${result.status}|${result.statusText}|${url}|${locations}`;

        if (emittedLogSignatures.has(signature)) {
            continue;
        }
        emittedLogSignatures.add(signature);

        if (!result.ok) {
            console.log(`[BAD] ${result.status} ${result.statusText} - ${url} | locations: ${locations}`);
        } else if (showAll) {
            console.log(`[OK] ${result.status} ${result.statusText} - ${url} | locations: ${locations}`);
        }
    }

    const broken = results.filter(item => !item.ok);

    console.log('\n--- Summary ---');
    console.log(`Total URLs: ${results.length}`);
    console.log(`Active (<400): ${results.length - broken.length}`);
    console.log(`Broken (>=400 or error): ${broken.length}`);

    if (broken.length > 0) {
        process.exitCode = 1;
    }
}

main().catch(error => {
    console.error(error);
    process.exit(2);
});
