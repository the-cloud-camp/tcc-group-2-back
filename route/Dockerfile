FROM node:18-alpine3.19
RUN npm install -g pnpm
RUN mkdir -p /var/www/route
WORKDIR /var/www/route
ADD ./route /var/www/route
RUN pnpm install
RUN pnpm build
EXPOSE 8004
CMD pnpm start:prod