FROM node:18-alpine3.19
RUN npm install -g pnpm
RUN mkdir -p /var/www/route
WORKDIR /var/www/route
ADD . /var/www/route
RUN pnpm install
CMD pnpm run build && pnpm run start:prod
