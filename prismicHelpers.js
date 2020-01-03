import Prismic from 'prismic-javascript'
import { apiEndpoint } from '~/prismic.config.js'

// Client method to query documents from the Prismic repo
let frontClient
let accessToken
export const Client = (req = null) => {
  if (!req && frontClient) return frontClient
  // prevents generating a new instance for client side since we don't need the refreshed request object.
  else {
    const options = Object.assign(
      {},
      req ? { req } : {},
      accessToken ? { accessToken } : {}
    )
    return Prismic.client(apiEndpoint, options)
  }
}
