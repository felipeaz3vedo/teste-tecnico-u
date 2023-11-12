FROM node:20

WORKDIR /usr/app

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install

COPY . .

EXPOSE 5000

RUN npx prisma generate

CMD [ "npm", "run", "dev" ]
