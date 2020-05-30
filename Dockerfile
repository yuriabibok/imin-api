# FROM node:12.13-alpine As development
FROM node:12.13-alpine

WORKDIR /usr/src/imin-api

COPY package*.json ./

# RUN npm install --only=development
RUN npm install

COPY . .

RUN npm run build

# FROM node:12.13-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
