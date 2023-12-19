FROM node:18-alpine3.19
RUN npm install -g pnpm
RUN mkdir -p /var/www/ticket
WORKDIR /var/www/ticket
ADD ./ticket /var/www/ticket
RUN pnpm install
RUN pnpm build
EXPOSE 8001
CMD pnpm start:prod