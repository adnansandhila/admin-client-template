
  import { createClient } from '@commercetools/sdk-client'
  import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
  import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'

  const projectKey = 'nestosh'

  const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
    host: 'https://auth.us-central1.gcp.commercetools.com',
    projectKey,
    credentials: {
      clientId: '5d-UgawFeYCp2x_CrE3C-oj0',
      clientSecret: 'rlX3b88VOrvVfM4qIkIsBPbhCtqr9p89',
    },
    scopes: ['manage_project:nestosh'],
  })
  const httpMiddleware = createHttpMiddleware({
    host: 'https://api.us-central1.gcp.commercetools.com',
  })
  const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
  })
  