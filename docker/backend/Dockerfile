FROM node:17-stretch-slim

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN npm i -g npm  &&  \
    yarn && \
    yarn global add @nestjs/cli


WORKDIR /app
