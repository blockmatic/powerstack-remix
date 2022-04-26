import * as env from 'env-var'

// PUBLIC CONFIGURATION
// Be careful to not put secrets here

// placeholder for feature flags
type FeatureFlags = {}

// smart contract addresses
type Contracts = {}

// apis and other services
type Services = {
  graphql_api: string
  graphql_api_key: string
}

type Analytics = {
  google: string
  sentry: string
}

// ethereum network config
type Network = {
  chain: string
  chain_id: string
}

type Cloudinary = {
  cloud_name: string
  api_key: string
  api_secret: string
}

// global application configuration based on env
export type AppConfig = {
  network: Network
  contracts: Contracts
  services: Services
  features: FeatureFlags
  analytics: Analytics
  cloudinary?: Cloudinary
}

export const appconfig: AppConfig = {
  network: {
    chain: env.get('CHAIN').required().asString(),
    chain_id: env.get('CHAIN_ID').required().asString(),
  },
  contracts: {},
  services: {
    graphql_api:
      env.get('GRAPHQL_API').asString() ||
      'https://powerstack.hasura.app/v1/graphql',
    graphql_api_key: env.get('GRAPHQL_API_KEY').asString() || '123',
  },
  analytics: {
    google: env.get('GOOGLE_ANALYTICS').asString() || '',
    sentry: env.get('SENTRY_DSN').asString() || '',
  },
  cloudinary: {
    cloud_name: env.get('CLOUDINARY_CLOUD_NAME').required().asString(),
    api_key: env.get('CLOUDINARY_API_KEY').required().asString(),
    api_secret: env.get('CLOUDINARY_API_SECRET').required().asString(),
  },
  features: {},
}
