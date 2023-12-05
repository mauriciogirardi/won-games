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
}

export type StrapiFetchResponse<T> = {
  body: T
  status: number
}

export type AtributesCover = {
  data: {
    attributes: {
      src: string
    }
  }
}

export type AtributesDeveloper = {
  data: [
    {
      attributes: {
        name: string
      }
    }
  ]
}

export type AtributesGallery = {
  data: [
    {
      attributes: {
        src: string
        label: string | null
      }
    }
  ]
}

export type AtributesPublisher = {
  data: {
    attributes: {
      name: string
    }
  }
}

export type AtributesCategory = {
  data: [
    {
      attributes: {
        name: string
      }
    }
  ]
}

export type AtributesPlatform = {
  data: [
    {
      attributes: {
        name: string
      }
    }
  ]
}
