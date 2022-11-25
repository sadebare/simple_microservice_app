FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY "package.json" /usr/src/app/
COPY "package-lock.json" /usr/src/app/

RUN npm install

RUN apk --no-cache add curl

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]

