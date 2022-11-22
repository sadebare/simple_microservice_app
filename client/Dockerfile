FROM node:alpine

ENV HTTP_PROXY="http://127.0.0.1:5000"

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY "package.json" /usr/src/app/

COPY "package-lock.json" /usr/src/app/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

