FROM node:12.18.3

WORKDIR /var/www/app

ADD package.json yarn.lock ./

RUN npm install

EXPOSE 3000
COPY . .

CMD ["npm", "run", "start:prod"]
