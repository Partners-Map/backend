FROM node:18.18.0

RUN mkdir -p /usr/src/app/dist/
WORKDIR /usr/src/app/

COPY ./dist /usr/src/app/dist/
COPY ./prisma /usr/src/app/prisma/
COPY package.json /usr/src/app/package.json
COPY .env /usr/src/app
COPY package-lock.json /usr/src/app/package-lock.json

RUN npm i 

EXPOSE 3002

CMD ["sh", "-c", "npm run seeds && npm run prod"]
