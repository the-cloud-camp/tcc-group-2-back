FROM node:18-alpine3.19
RUN npm install -g pnpm
RUN mkdir -p /var/www/ticket
WORKDIR /var/www/ticket
ADD . /var/www/ticket
RUN pnpm install
RUN pnpm build
CMD pnpm start:prod