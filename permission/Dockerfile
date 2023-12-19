FROM node:18-alpine3.19
RUN npm install -g pnpm
RUN mkdir -p /var/www/permission
WORKDIR /var/www/permission
ADD ./permission /var/www/permission
RUN pnpm install
RUN pnpm build
EXPOSE 8005
CMD pnpm start:prod