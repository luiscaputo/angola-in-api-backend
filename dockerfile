FROM node:18.13

WORKDIR /usr/app

COPY package*.json ./

RUN yarn

COPY . .

# RUN yarn build

RUN npm install -g npm@9.6.1
# RUN npm run typeorm migration:run -- -d ./src/configs/database/index.ts
# RUN ./src/configs/database/generate-models.sh

EXPOSE 3338

CMD ["yarn", "dev"]