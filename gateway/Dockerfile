FROM node:18.12.0-alpine
RUN npm install -g npm@9.8.1
RUN mkdir -p /var/www/gateway
WORKDIR /var/www/gateway
ADD . /var/www/gateway
RUN npm install
CMD npm run build && npm run start:prod
