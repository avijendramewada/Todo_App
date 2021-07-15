FROM node:8.11.4-alpine

WORKDIR app

RUN apk add --no-cache git yarn python g++ bash make && rm -rf /var/cache/apk/*

COPY package.json yarn.lock ./

RUN yarn --pure-lockfile --force

COPY . .

EXPOSE 12345

CMD [ "npm", "start" ]
