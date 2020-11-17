import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import Header from 'components/Header';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { appTheme } from './theme';
import { Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import RouteContainer from 'routes/RouteContainer';
import { HeaderBtnControlProvider } from 'providers';

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      retry: 0,
      retryDelay: () => 0,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeProvider theme={appTheme}>
        <QueryParamProvider ReactRouterRoute={Route}>
          <HeaderBtnControlProvider>
            <Header />
            <RouteContainer />
          </HeaderBtnControlProvider>
        </QueryParamProvider>
      </ThemeProvider>
    </ReactQueryCacheProvider>
  );
}

export default App;
