FROM node:14-alpine

WORKDIR /usr/src/app

# RUN git clone https://github.com/grumpykai/dockerk8stest .

COPY ./webapp .

RUN npm install

EXPOSE 8080

CMD [ "node", "index.js" ]