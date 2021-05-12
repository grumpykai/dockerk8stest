FROM node

WORKDIR /usr/src/app

RUN git clone https://github.com/grumpykai/dockerk8stest .

RUN npm install

EXPOSE 8080

CMD [ "node", "index.js" ]