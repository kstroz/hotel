module.exports = {
  preset: 'react-native',
  setupFiles: [
    './jestSetup.ts',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  setupFilesAfterEnv: ['./jestSetupAfterEnv.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-native|@react-navigation|@miblanchard/react-native-slider)',
  ],
};
