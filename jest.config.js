module.exports = {
  preset: 'react-native',
  setupFiles: ['./jestSetup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-native|@react-navigation)',
  ],
};
