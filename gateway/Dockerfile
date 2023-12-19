FROM node:18-alpine3.19
RUN npm install -g pnpm
RUN mkdir -p /var/www/gateway
WORKDIR /var/www/gateway
ADD ./gateway /var/www/gateway
RUN pwd
RUN ls -la
RUN pnpm install
EXPOSE 8000
CMD pnpm run build && pnpm run start:prod
