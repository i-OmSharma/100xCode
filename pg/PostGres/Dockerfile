FROM node:20-alpine

WORKDIR /app

COPY package.json tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npx tsc


EXPOSE 3000

CMD [ "node", "dist/index.js" ]
