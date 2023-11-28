import { join } from 'node:path';

import { LoggerOptions } from 'typeorm';
import { WinstonAdaptor } from 'typeorm-logger-adaptor/logger/winston';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { SeederOptions } from 'typeorm-extension';

import { winstonLogger } from './src/common/logging/winston.logger';

export const loggingLevel = (): LoggerOptions => {
  const level = (process.env.DB_LOG_LEVEL || '').trim();

  if (level === 'all') {
    return 'all';
  } else if (level.length > 0) {
    return level.split(',') as LoggerOptions;
  } else {
    return ['error'];
  }
};

const options: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number.parseInt(process.env.DB_PORT || ''),
  username: 'pguser',
  password: 'pgpassword',
  database: 'pgdb',
    // process.env.ENV === 'e2e'
    //   ? `${process.env.DB_DATABASE} || '-e2e`
    //   : process.env.DB_DATABASE,
  entities: [join(__dirname, 'src/**/*.entity.{js,ts}')],
  migrations: [join(__dirname, 'migrations/**/*.{js,ts}')],
  // seeds: [join(__dirname, 'seeds/**/*.{js,ts}')],
  migrationsTransactionMode: 'each',
  logging: loggingLevel(),
  logger: new WinstonAdaptor(winstonLogger, loggingLevel()),
  parseInt8: true,
};

export default options;
