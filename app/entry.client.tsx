import * as React from 'react'
import { RemixBrowser } from '@remix-run/react'
import { hydrate } from 'react-dom'
import { getCssText } from './styles/stitches.config'
import ClientStyleContext from './styles/client.context'
import {
  ApolloProvider,
  createApolloClientBrowser,
} from './graphql/apollo.browser'

interface ClientCacheProviderProps {
  children: React.ReactNode
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [sheet, setSheet] = React.useState(getCssText())

  const reset = React.useCallback(() => {
    setSheet(getCssText())
  }, [])

  return (
    <ClientStyleContext.Provider value={{ reset, sheet }}>
      {children}
    </ClientStyleContext.Provider>
  )
}

hydrate(
  <ClientCacheProvider>
    <ApolloProvider client={createApolloClientBrowser()}>
      <RemixBrowser />
    </ApolloProvider>
  </ClientCacheProvider>,
  document,
)
