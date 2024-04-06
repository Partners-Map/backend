FROM node:18.18.0

WORKDIR /usr/src/app/
RUN mkdir -p dist

COPY ./dist ./dist/
COPY ./prisma ./prisma/
COPY .env ./
COPY package*.json ./

RUN npm i 

EXPOSE 3002

CMD ["sh", "-c", "npm run seeds && npm run prod"]
