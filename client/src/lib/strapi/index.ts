import { env } from '@/env'
import { StrapiFetchResponse, StrapiFetchType } from './types'

export const baseUrl = env.BASE_URL_STRAPI
const endpoint = `${baseUrl}/graphql/`

export async function strapiFetch<T>({
  cache,
  query,
  headers,
  next,
  variables
}: StrapiFetchType<T>): Promise<StrapiFetchResponse<T>> {
  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      }),
      ...(next && { next }),
      ...(cache && { cache })
    })

    const body = await result.json()

    if ('errors' in body) {
      throw body.errors[0]
    }

    return {
      status: result.status,
      body
    }
  } catch (err) {
    throw {
      error: err,
      query
    }
  }
}
