# FROM node:alpine

# ENV HTTP_PROXY="http://127.0.0.1:5000"

# RUN mkdir -p /usr/src/app

# WORKDIR /usr/src/app

# COPY "package.json" /usr/src/app/

# COPY "package-lock.json" /usr/src/app/

# RUN npm install

# RUN apk --no-cache add curl

# COPY . .

# EXPOSE 3000

# CMD ["npm", "start"]


FROM node:16-alpine as build_stage

WORKDIR /src

COPY package.json .

COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build

# deploy
FROM nginx:stable-alpine as prod_stage

COPY --from=build_stage /src/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]