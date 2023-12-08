type ExtractVariables<T> = T extends { variables: object }
  ? T['variables']
  : never

export type RatingTypes = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type StrapiFetchType<T> = {
  cache?: RequestCache
  headers?: HeadersInit
  query: string
  next?: NextFetchRequestConfig
  variables?: ExtractVariables<T>
  path?: string
  baseUrl?: string
}

export type StrapiFetchResponse<T> = {
  body: T
  status: number
}

export type AttributesCover = {
  data: {
    attributes: {
      src: string
    }
  }
}

export type AttributesDeveloper = {
  data: [
    {
      attributes: {
        name: string
      }
    }
  ]
}

export type AttributesGallery = {
  data: [
    {
      attributes: {
        src: string
        label: string | null
      }
    }
  ]
}

export type AttributesPublisher = {
  data: {
    attributes: {
      name: string
    }
  }
}

export type AttributesCategory = {
  data: [
    {
      attributes: {
        name: string
      }
    }
  ]
}

export type AttributesPlatform = {
  data: [
    {
      attributes: {
        name: string
      }
    }
  ]
}

export type Pagination = {
  limit?: number
  page?: number
  pageSize?: number
  start?: number
}
