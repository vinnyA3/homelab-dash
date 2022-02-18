# build stage
FROM node:16.13.1 as build

WORKDIR /app

COPY ./package.json /app/package.json

COPY ./package-lock.json /app/package-lock.json

RUN npm install

COPY . .

RUN npm run build

# run stage
FROM nginx:1.21.4

RUN mkdir -p ./nginx/blocks/
COPY ./nginx/blocks/* /etc/nginx/blocks/
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
