jest.mock('@utils/promises');

// w/o node cannot process lengthy snapshot
jest.mock('react-native-reanimated-carousel');
jest.mock('@gorhom/bottom-sheet');

jest.mock('@react-native-clipboard/clipboard', () => jest.fn());
