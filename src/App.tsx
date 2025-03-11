import { queryClient } from '@api/queryClient';
import { RootNavigation } from '@navigation/RootNavigation';
import { QueryClientProvider } from '@tanstack/react-query';
import { CustomTheme } from '@theme/Theme';
import React, { FC } from 'react';
import { PaperProvider } from 'react-native-paper';

const App: FC = () => {
  return (
    <PaperProvider theme={CustomTheme}>
      <QueryClientProvider client={queryClient}>
        <RootNavigation />
      </QueryClientProvider>
    </PaperProvider>
  );
};

export default App;
