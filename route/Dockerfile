FROM node:18.12.0-alpine
RUN npm install -g npm@9.8.1
RUN mkdir -p /var/www/route
WORKDIR /var/www/route
ADD . /var/www/route
RUN npm install
CMD npm run build && npm run start:prod
