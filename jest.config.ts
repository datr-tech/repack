export default {
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  testPathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['clover', 'text'],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/$1',
  },
};
