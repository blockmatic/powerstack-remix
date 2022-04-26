import type { EntryContext } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { renderToString } from 'react-dom/server'
import { getDataFromTree } from '@apollo/client/react/ssr'
import {
  ApolloContext,
  ApolloProvider,
  createApolloClientServer,
} from './graphql/apollo.server'

import { getCssText } from './styles/stitches.config'

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const apollo_client_server = createApolloClientServer()
  const App = (
    <ApolloProvider client={apollo_client_server}>
      <RemixServer context={remixContext} url={request.url} />
    </ApolloProvider>
  )

  return getDataFromTree(App).then(() => {
    const initialState = apollo_client_server.extract()

    let markup = renderToString(
      <ApolloContext.Provider value={initialState}>
        {App}
      </ApolloContext.Provider>,
    )

    markup = markup.replace(
      /<style id="stitches">.*<\/style>/g,
      `<style id="stitches">${getCssText()}</style>`,
    )

    responseHeaders.set('Content-Type', 'text/html')

    return new Response('<!DOCTYPE html>' + markup, {
      status: responseStatusCode,
      headers: responseHeaders,
    })
  })
}
