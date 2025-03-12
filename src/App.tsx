import { queryClient } from '@api/queryClient';
import { RootNavigation } from '@navigation/RootNavigation';
import { QueryClientProvider } from '@tanstack/react-query';
import { CustomTheme } from '@theme/Theme';
import React, { FC } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';

const App: FC = () => {
  return (
    <PaperProvider theme={CustomTheme}>
      <GestureHandlerRootView>
        <QueryClientProvider client={queryClient}>
          <RootNavigation />
        </QueryClientProvider>
      </GestureHandlerRootView>
    </PaperProvider>
  );
};

export default App;
