/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  collectCoverageFrom: ['**/*.ts'],
  maxWorkers: '50%',
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  roots: ['src'],
  testEnvironment: 'node',
  testMatch: ['**.*.spec.ts'],
  testSequencer: '<rootDir>/jest.alphabetical.sequencer.js',
  transform: {
    '^.+\\.ts$': ['ts-jest'],
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
