FROM node:18-alpine3.19
RUN npm install -g pnpm
RUN mkdir -p /var/www/user
WORKDIR /var/www/user
ADD ./user /var/www/user
RUN pnpm install
RUN pnpm build
EXPOSE 8003
CMD pnpm start:prod