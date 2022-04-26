import { createContext } from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { appconfig } from '~/app-config'
export { ApolloProvider } from '@apollo/client'

export const createApolloClientServer = () =>
  new ApolloClient({
    uri: appconfig.services.graphql_api,
    cache: new InMemoryCache().restore({}),
    ssrMode: true,
  })

export const ApolloContext = createContext({})
