FROM bigpapoo/r5a05-node
LABEL authors="maximefurious"

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install
RUN npm install pm2 -g

COPY --chown=node:node . .

CMD [ "pm2-runtime", "npm", "--", "start" ]

COPY . .

ENV PORT=3000

EXPOSE 3000