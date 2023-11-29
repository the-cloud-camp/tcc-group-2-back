const baseConfig = require('./jest.common.config.js');

/** @type {import('jest').Config} */
module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: ['jest-extended/all'],
  testMatch: ['**/*.spec.ts'],
};
