FROM node:16-alpine

LABEL app="alura_nest"

RUN apk add --update --no-cache \
  bash \
  curl \
  git

WORKDIR /home/node/app

RUN yarn global add @nestjs/cli

COPY . .

USER node

EXPOSE 3000