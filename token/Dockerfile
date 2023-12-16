FROM node:18-alpine3.19
RUN npm install -g pnpm
RUN mkdir -p /var/www/token
WORKDIR /var/www/token
ADD . /var/www/token
RUN pnpm install
CMD pnpm run build && pnpm run start:prod
