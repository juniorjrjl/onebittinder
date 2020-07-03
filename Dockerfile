FROM node:lts

RUN apt-get update && apt-get install -qq -y --no-install-recommends

ENV INSTALL_PATH /onebitinder

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY package*.json ./

RUN yarn install

RUN yarn global add @vue/cli

COPY . .