import * as React from 'react';

import Navigator from './src/navigations/stack';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://tigra-5mgmi.ondigitalocean.app/graphql/',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    </>
  );
}
