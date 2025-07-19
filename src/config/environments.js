export const ENV_PROFILES = {
  staging: {
    apiUrl: 'https://api.staging.example.com',
    sentryDsn: process.env.SENTRY_DSN_STAGING
  },
  production: {
    apiUrl: 'https://api.production.example.com',
    sentryDsn: process.env.SENTRY_DSN_PROD
  }
};