# PowerStack Remix Starter

PowerStack Remix template for development speed and great developer experience.

### Tech Stack

- remix react framework https://remix.run
- stitches styling framework https://stitches.dev
- remix-validated-form https://www.remix-validated-form.io
- zod validator https://github.com/colinhacks/zod
- prisma orm https://www.prisma.io/
- remix-utils https://github.com/sergiodxa/remix-utils
- lodash tools https://lodash.com/docs
- react-use hooks https://github.com/streamich/react-use
- typescript https://www.typescriptlang.org
- remix-i18next internationalization https://github.com/sergiodxa/remix-i18next
- docker https://www.docker.com
- sentry reporting https://sentry.io/
- login with crypto wallets and remix-auth https://github.com/sergiodxa/remix-auth
- ethers https://docs.ethers.io/v5/
- zustand https://github.com/pmndrs/zustand
- react-icons https://react-icons.github.io/react-icons/
- ~/library with utilities

### Remix Fundamentals

- https://remix.run/docs/en/v1/api/conventions
- https://www.youtube.com/watch?v=d_BhzHVV4aQ
- https://www.youtube.com/watch?v=QpP3daA2na4
- https://remix.run/docs/en/v1/pages/technical-explanation

### Auth Strategy

- https://github.com/sergiodxa/remix-auth/
- https://www.youtube.com/watch?v=5O_uufXA8xE

### Prisma ORM

- https://www.youtube.com/watch?v=mU8-nKwfw4Y
- https://www.prisma.io/docs/concepts/overview/what-is-prisma

### GraphQL ( Real-time ) API

- endpoint: https://powerstack.hasura.app/v1/graphql
- simple graphiql: https://graphiql-online.com/
- https://hasura.io/docs/latest/graphql/core/databases/postgres/queries/index/
- https://hasura.io/docs/latest/graphql/core/databases/postgres/queries/query-filters/
- https://hasura.io/blog/postgres-json-and-jsonb-type-support-on-graphql-41f586e47536/

### Conventions

- https://github.com/blockmatic/powerstack-architecture

### File Structure

```
- app/
  - components/
  - library/
  - routes/
  - store/
  - styles/
    - client.context.tsx
    - server.context.tsx
    - stitches.config.ts
  - app-config.ts
  - app-secrets.ts
  - auth.server.ts
  - entry.client.tsx
  - entry.server.tsx
  - root.tsx
```

1. `client.context.tsx` - Keeps the client context of styles and to reset styles sheets after every interaction into the state.
2. `server.context.tsx` - Keeps the server context mounted on `entry.server.tsx`
   with the Stitches sheets.
3. `stitches.config.ts` - Keeps the Stitches configuration that is shared into
   the project.
4. `entry.client.tsx` - Every time that styles update and be re-injected it sets the
   Stitches sheet to a React state.
5. `entry.server.tsx` - Create the markup with the styles injected to serve on the server response.

## Preview

Open this example on [CodeSandbox](https://codesandbox.io/):

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/blockmatic/powerstack-remix/tree/main/examples/main)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/routes/index.tsx`. The page auto-updates as you edit the file.

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code

## Docker

```
# Build the image
docker build -t powerstack_remix .

# Start a container
docker run --env-file -p 3000:3000 -d powerstack_remix

# Get container ID
docker ps

# Print app output
docker logs -f <container id>
```

## Contributing

Read the [contributing guidelines](https://developers.blockmatic.io) for details.

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
