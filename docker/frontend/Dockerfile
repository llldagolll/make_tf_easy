FROM node:17-stretch-slim

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN npm i -g npm  \ 
    && yarn package.json \
    && apt-get update \
    && apt-get install -y libssl-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
