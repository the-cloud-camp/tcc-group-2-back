FROM node:18-alpine3.19
RUN npm install -g pnpm
RUN mkdir -p /var/www/route
WORKDIR /var/www/route
ADD ./route /var/www/route
RUN pnpm install
RUN pnpm build
# CMD node test.js
CMD pnpm typeorm:migration:run && pnpm seed:run && pnpm start:prod
