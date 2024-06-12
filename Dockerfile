FROM node:alpine
LABEL authors="maximefurious"

WORKDIR /www/wwwroot/Fast-Track-auto-API

COPY package*.json ./

RUN npm install
RUN npm install pm2 -g

CMD [ "pm2-runtime", "npm", "--", "start" ]

COPY . .

ENV PORT=3000

EXPOSE 3000

