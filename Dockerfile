FROM node:18-alpine

ARG VITE_API_URL
ARG VITE_TOKEN

ENV VITE_API_URL=$VITE_API_URL
ENV VITE_TOKEN=$VITE_TOKEN

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
