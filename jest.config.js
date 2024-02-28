module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./config/jest/setup.js'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!react-native-safe-area-context|@gluestack-ui)/',
  ],
};
