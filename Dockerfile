FROM node:18

WORKDIR /main

COPY package.json /main

RUN npm install

WORKDIR /main/Projeto/public

EXPOSE 3000

COPY . /main

CMD ["npx", "json-server", "db.json"]
