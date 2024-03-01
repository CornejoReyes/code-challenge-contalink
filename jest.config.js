const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

const moduleNameMapperPaths = pathsToModuleNameMapper(compilerOptions.paths);

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./config/jest/setup.ts'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!react-native-safe-area-context|@gluestack-ui)/',
  ],
  moduleNameMapper: {
    ...moduleNameMapperPaths,
  },
};
