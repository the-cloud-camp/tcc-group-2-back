## prerequisite

1. pnpm installed in local machine
2. nvm installed or node v18.12.0 installed in local machine
3. docker compose installed in local machine

## Setting up

1. run docker compose

```docker
docker compose up -d
```

2. install dependencies

```bash
pnpm install
```

3. migrate DB

```bash
pnpm typeorm:migration:run
```

4. seeding DB

```bash
pnpm seed:run
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e


```
