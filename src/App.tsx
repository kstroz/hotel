import { queryClient } from '@api/queryClient';
import { RootNavigation } from '@navigation/RootNavigation';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { FC } from 'react';

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigation />
    </QueryClientProvider>
  );
};

export default App;
