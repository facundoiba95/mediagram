FROM node:18.19.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3200

CMD ["npm", "start"]