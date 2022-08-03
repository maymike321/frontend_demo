import * as react from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SalesOptions } from './components/sales-options';

export function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <react.ChakraProvider theme={react.theme}>
        <SalesOptions
          title="Plans that fit our needs"
          description="Start with 2-hour free trial. 3 credit cards needed. You may never cancel."
        ></SalesOptions>
      </react.ChakraProvider>
    </QueryClientProvider>
  );
}