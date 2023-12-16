FROM node:18-alpine3.19
RUN npm install -g pnpm
RUN mkdir -p /var/www/user
WORKDIR /var/www/user
ADD . /var/www/user
RUN pnpm install
CMD pnpm run build && pnpm run start:prod
