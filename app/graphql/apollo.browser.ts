import {
  split,
  HttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SentryLink } from 'apollo-link-sentry'
import { appconfig } from '~/app-config'
import { createContext } from 'react'

export { ApolloProvider } from '@apollo/client'

const graphql_api_headers = {
  'x-api-key': appconfig.services.graphql_api_key,
}

const splitWs = (wsLink: WebSocketLink, httpLink: HttpLink) => {
  return split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink,
  )
}

const httpLink = new HttpLink({
  uri: appconfig.services.graphql_api,
  headers: graphql_api_headers,
})

const wsLink = new WebSocketLink({
  uri: appconfig.services.graphql_api.replace('http', 'ws'),
  options: {
    reconnect: true,
    connectionParams: {
      headers: graphql_api_headers,
    },
  },
})

const applicationLink = splitWs(wsLink, httpLink)

const links = [
  applicationLink,
  new SentryLink({
    setTransaction: true,
    setFingerprint: true,
    attachBreadcrumbs: {
      includeQuery: true,
      includeVariables: true,
      includeFetchResult: true,
      includeError: true,
      includeCache: true,
    },
  }),
]

export const createApolloClientBrowser = () =>
  new ApolloClient({
    link: ApolloLink.from(links),
    cache: new InMemoryCache({
      addTypename: false,
    }).restore(window.__INITIAL_STATE__),
    ssrMode: false,
  })

export const ApolloContext = createContext(window.__INITIAL_STATE__)
