import { WinstonModule } from 'nest-winston';
import { createLogger, format, LoggerOptions, transports } from 'winston';

const localFormat = format.combine(
  format.colorize({
    colors: {
      info: 'blue',
      warn: 'yellow',
      error: 'red',
    },
  }),
  format.timestamp(),
  format.errors({ stack: true }),
  format.printf(({ timestamp, level, message, stack }) => {
    return `${timestamp as string} ${level}: ${message as string} ${
      stack ? (stack as string) : ''
    }`;
  }),
);

const serverFormat = format.combine(
  format.timestamp(),
  format.errors({ stack: true }),
  format.json(),
);

const loggerOptions: LoggerOptions = {
  format: process.env.ENV === 'local' ? localFormat : serverFormat,
  transports: Object.assign(
    new transports.Console({
      handleExceptions: true,
    }),
    {
      handleRejections: true,
    },
  ),
};

export const winstonLogger = createLogger(loggerOptions);

export const nestWinstonLogger = WinstonModule.createLogger(loggerOptions);
