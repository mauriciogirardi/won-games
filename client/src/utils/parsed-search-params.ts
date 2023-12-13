type Data = {
  page?: string
  pageSize?: string
  [filter: string]: string | undefined
}

export function parsedSearchParams(data: Data) {
  const newSearchParams: {
    [filter: string]:
      | string
      | undefined
      | { name: string | undefined; filter: string }
    page?: string | undefined
    pageSize?: string | undefined
  } = {}

  for (const key in data) {
    const hasBarProperty = Object.prototype.hasOwnProperty.call(data, key)
    if (hasBarProperty) {
      if (key.startsWith('filters')) {
        const [, filter, operator] =
          key.match(/filters\[([a-zA-Z]+)\]\[\$([a-zA-Z]+)\]/) || []
        const createObjFilter = {
          name: data[key],
          filter: `$${operator}`
        }
        newSearchParams[filter] = createObjFilter
      } else {
        newSearchParams[key] = data[key]
      }
    }
  }

  return newSearchParams
}
