FROM node:14.17.5

WORKDIR /usr/server
COPY ./src ./src
COPY package.json .
COPY yarn.lock .
RUN yarn install

EXPOSE 5000

CMD yarn start
