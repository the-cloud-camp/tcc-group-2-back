const baseConfig = require('./jest.common.config');

/** @type {import('jest').Config} */
module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: ['<rootDir>/jest.e2e.setup.js', 'jest-extended/all'],
  testMatch: ['**/*.e2e-spec.ts'],
  testTimeout: 10000,
};
