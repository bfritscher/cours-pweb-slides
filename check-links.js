#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const showAll = args.includes('--all');
const positionalArgs = args.filter(arg => !arg.startsWith('--'));
const rootDir = positionalArgs[0] ? path.resolve(positionalArgs[0]) : process.cwd();
const timeoutMs = Number(positionalArgs[1] || 10000);

function walkMarkdownFiles(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            files.push(...walkMarkdownFiles(fullPath));
            continue;
        }

        if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
            files.push(fullPath);
        }
    }

    return files;
}

function normalizeCandidate(rawUrl) {
    return rawUrl
        .trim()
        .replace(/[)>\]}"'.,;:!?]+$/g, '');
}

function extractUrls(content) {
    const regex = /https?:\/\/[^\s<>(){}\[\]"']+/gi;
    const urls = new Set();
    let match;

    while ((match = regex.exec(content)) !== null) {
        const normalized = normalizeCandidate(match[0]);
        if (normalized) {
            urls.add(normalized);
        }
    }

    return [...urls];
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

    const markdownFiles = walkMarkdownFiles(rootDir);
    const urlToFiles = new Map();

    for (const filePath of markdownFiles) {
        const content = fs.readFileSync(filePath, 'utf8');
        const urls = extractUrls(content);

        for (const url of urls) {
            if (!urlToFiles.has(url)) {
                urlToFiles.set(url, new Set());
            }
            urlToFiles.get(url).add(path.relative(rootDir, filePath));
        }
    }

    const uniqueUrls = [...urlToFiles.keys()];
    if (uniqueUrls.length === 0) {
        console.log('No absolute http/https URLs found in markdown files.');
        return;
    }

    console.log(`Checking ${uniqueUrls.length} unique URL(s) from ${markdownFiles.length} markdown file(s)...\n`);

    const results = [];
    for (const url of uniqueUrls) {
        const result = await checkUrl(url);
        results.push(result);
        const files = [...(urlToFiles.get(url) || [])].join(', ');

        if (!result.ok) {
            console.log(`[BAD] ${result.status} ${result.statusText} - ${url} | file(s): ${files}`);
        } else if (showAll) {
            console.log(`[OK] ${result.status} ${result.statusText} - ${url}`);
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
