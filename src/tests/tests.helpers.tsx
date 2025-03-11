import axios from '@api/axios';
import { queryClient } from '@api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react-native';
import { CustomTheme } from '@theme/Theme';
import MockAdapter from 'axios-mock-adapter';
import { PaperProvider } from 'react-native-paper';

export const renderWithProviders = <T,>(ui: React.ReactElement<T>) =>
  render(
    <PaperProvider theme={CustomTheme}>
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    </PaperProvider>,
  );

export const setupAxios = () => {
  const mockAdapter = new MockAdapter(axios);

  beforeEach(() => {
    jest.useFakeTimers();
    queryClient.removeQueries();
    mockAdapter.reset();
  });

  afterEach(() => {
    mockAdapter.restore();
    jest.clearAllTimers();
  });

  return mockAdapter;
};
