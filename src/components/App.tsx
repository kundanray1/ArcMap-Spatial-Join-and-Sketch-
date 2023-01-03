import { ChakraProvider } from '@chakra-ui/react';
import 'assets/css/App.css';
import 'assets/css/theme.css';
import theme from 'config/theme';
import ThemeProvider from 'context/ThemeContext';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from 'router/Router';
import ErrorBoundary from './errors/ErrorBoundary';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider>
      <ChakraProvider theme={theme}>
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </ErrorBoundary>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default App;
