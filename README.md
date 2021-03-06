# PowerStack NextJS Starter

PowerStack Web3 NextJS starter for rapid development of multichain applications.

_Disclaimer: This is a work in progress. Will be finalized soon._

## Architecture

![](./_docs/mvvm-architecture.png)

## Features

- [ ] Web2 and Web3 authentication ( EVM, Solana, EOSIO, Web3Auth ).
- [ ] Wallet integration: sign messages and transactions.
- [ ] Upload to Arweave using Blundr.
- [ ] Upload to IPFS using Pinata.
- [ ] State-of-art optimization for Web Vitals.
- [ ] Lighthouse CI performance reports.
- [ ] Portable vanillajs core logic store with Zustand.
- [ ] CSS-in-JS design system Stitches.
- [ ] Import design tokens from Toolabs Design Manager.
- [ ] GraphQL client with support for multiple indexers.
- [ ] Autogenerate TypeScript types from GraphQL schema.
- [ ] Simple base ui components with forms validation.
- [ ] Utilities library for common web2 and web3 tasks.
- [ ] Crash reporting and web analytics.
- [ ] TypeScript, ESLint, Prettier and Husky for code quality.

## Tech Stack

- Nextjs https://nextjs.org/
- Stitches styling framework https://stitches.dev
- Lodash tools https://lodash.com/docs
- React-use hooks https://github.com/streamich/react-use
- Remix-validated-form https://www.remix-validated-form.io
- Zod validator https://github.com/colinhacks/zod
- Typescript https://www.typescriptlang.org
- Zustand https://github.com/pmndrs/zustand
- Sentry reporting https://sentry.io/

### Conventions

- https://github.com/blockmatic/powerstack-architecture

### GraphQL

PowerStack leverages open source Hasura GraphQL engine in conjunction with GraphQL codegen to genere common typescript types generated from the graph schema. We love prisma and we use it on nodejs services, however for client applications we prefer to keep a single form of data fetching and prevent duplicated types for the data structures.

more https://github.com/blockmatic/powerstack-hasura

endpoint: https://powerstack-hasura-atgjsg75cq-uc.a.run.app/v1/graphql  
graphiql: https://graphiql-online.com

### Hasura

- https://hasura.io/docs/latest/graphql/core/databases/postgres/queries/index/
- https://hasura.io/docs/latest/graphql/core/databases/postgres/queries/query-filters/
- https://hasura.io/blog/postgres-json-and-jsonb-type-support-on-graphql-41f586e47536/

### File Structure

```
- components/
- library/
- pages/
- store/
- styles/
   - index.ts
   - stitches.config.ts
- root.tsx
```

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code

## Docker

```
# Build the image
docker build -t powerstack-next:local .

# Start a container
docker run --name powerstack-next --env-file .env -p 3000:3303 -d powerstack-next:local

# Get container ID
docker ps -aqf "name=^powerstack-next$"

# Print app output
docker logs -f powerstack-next

# Stop, start, restart, kill
docker stop powerstack-next
docker start powerstack-next
docker restart powerstack-next
docker kill powerstack-next
```

## Blockmatic

Blockmatic is building a robust ecosystem of people and tools for the development of blockchain applications.

[blockmatic.io](https://blockmatic.io)

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

<!-- display the social media buttons in your README -->

[![Blockmatic Twitter][1.1]][1]
[![Blockmatic Facebook][2.1]][2]
[![Blockmatic Github][3.1]][3]

<!-- links to social media icons -->
<!-- no need to change these -->

<!-- icons with padding -->

[1.1]: http://i.imgur.com/tXSoThF.png 'twitter icon with padding'
[2.1]: http://i.imgur.com/P3YfQoD.png 'facebook icon with padding'
[3.1]: http://i.imgur.com/0o48UoR.png 'github icon with padding'

<!-- icons without padding -->

[1.2]: http://i.imgur.com/wWzX9uB.png 'twitter icon without padding'
[2.2]: http://i.imgur.com/fep1WsG.png 'facebook icon without padding'
[3.2]: http://i.imgur.com/9I6NRUm.png 'github icon without padding'

<!-- links to your social media accounts -->
<!-- update these accordingly -->

[1]: http://www.twitter.com/blockmatic_io
[2]: http://fb.me/blockmatic.io
[3]: http://www.github.com/blockmatic

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->
