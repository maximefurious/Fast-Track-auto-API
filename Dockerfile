FROM bigpapoo/r5a05-node
LABEL authors="maximefurious"

# make directory
RUN mkdir -p /app
RUN chmod -R 777 /app

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install
RUN npm install pm2 -g

CMD [ "pm2-runtime", "npm", "--", "start" ]

COPY . .

ENV PORT=3000

EXPOSE 3000