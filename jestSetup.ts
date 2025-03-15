// w/o node cannot process lengthy snapshot
jest.mock('react-native-reanimated-carousel');
jest.mock('@gorhom/bottom-sheet');
jest.mock('@miblanchard/react-native-slider', () => ({
  Slider: jest.fn(),
}));

jest.mock('@react-native-clipboard/clipboard', () => jest.fn());

// Project files
jest.mock('@utils/promises');
