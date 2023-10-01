FROM node:18

WORKDIR /main/Projeto/public

EXPOSE 3000

COPY package.json /main/Projeto/public

COPY . /main

RUN npm install

CMD ["npx", "json-server", "db.json"]
