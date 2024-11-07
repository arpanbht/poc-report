FROM node:21-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8276

CMD ["node","index.js"]
