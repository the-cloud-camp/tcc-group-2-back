FROM node:18-alpine3.19
RUN npm install -g pnpm
RUN mkdir -p /var/www/gateway
WORKDIR /var/www/gateway
ADD . /var/www/gateway
RUN pnpm install
RUN pnpm build
CMD pnpm start:prod