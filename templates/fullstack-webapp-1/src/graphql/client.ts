/* eslint-disable @typescript-eslint/no-var-requires, global-require */
import { useMemo } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createIsomorphLink() {
  // server
  // TODO: nexus framework에서 excutable schema 가져오기
  // - 관련이슈: https://github.com/graphql-nexus/nexus/discussions/907
  // if (typeof window === 'undefined') {
  //   const { SchemaLink } = require('@apollo/client/link/schema');
  //   const { schema } = require('./schema');
  //   return new SchemaLink({ schema });
  // }
  // client
  const { HttpLink } = require('@apollo/client/link/http');
  return new HttpLink({
    uri: '/api/graphql',
    credentials: 'same-origin',
  });
}

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(
  initialState = null
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
