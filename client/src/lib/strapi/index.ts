import { StrapiFetchResponse, StrapiFetchType } from './types'
import { BASE_URL } from '@/constants'

export async function strapiFetch<T>({
  cache = 'force-cache',
  query,
  headers,
  next,
  variables,
  baseUrl = BASE_URL
}: StrapiFetchType<T>): Promise<StrapiFetchResponse<T>> {
  const endpoint = `${baseUrl}/graphql/`

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
