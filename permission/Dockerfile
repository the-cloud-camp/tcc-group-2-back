FROM node:18-alpine3.19
RUN npm install -g pnpm
RUN mkdir -p /var/www/permission
WORKDIR /var/www/permission
ADD . /var/www/permission
RUN pnpm install
CMD pnpm run build && pnpm run start:prod
