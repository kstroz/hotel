import axios from '@api/axios';
import { queryClient } from '@api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';

export const renderWithProviders = <T,>(ui: React.ReactElement<T>) =>
  render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);

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
