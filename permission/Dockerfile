FROM node:18.12.0-alpine
RUN npm install -g npm@9.8.1
RUN mkdir -p /var/www/permission
WORKDIR /var/www/permission
ADD . /var/www/permission
RUN npm install
CMD npm run build && npm run start:prod
