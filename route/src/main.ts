import { NestFactory } from '@nestjs/core';
import { RouteModule } from './route.module';
import { nestWinstonLogger } from './common/logging/winston.logger';

import { initializeTransactionalContext } from 'typeorm-transactional';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  initializeTransactionalContext();
  const app = await NestFactory.create(RouteModule, {
    logger: nestWinstonLogger,
  });

  // const config = app.get(ConfigService)
  // const logger = app.get(Logger)

  await app.listen(3000);
}

void bootstrap();
