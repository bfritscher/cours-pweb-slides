FROM ghcr.io/puppeteer/puppeteer:latest

USER root

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        fonts-noto-core \
        fonts-noto-color-emoji \
        fonts-noto-cjk \
        fonts-noto-extra \
    && rm -rf /var/lib/apt/lists/* \
    && fc-cache -f -v

USER pptruser
