import { ItemSidebarProps } from '@/components/explore-sidebar'
import { ParsedUrlQueryInput } from 'querystring'

export type FilterItemsType = Pick<ItemSidebarProps, 'type' | 'name'>[]
type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: FilterItemsType
}

type Query = {
  [key: string]: string | string[] | boolean
}

export const CHECKBOX = 'checkbox'
export const RADIO = 'radio'
export const INVALID_PARAMS_PAGE = ['page', 'pageSize']
export const INVALID_PARAMS = ['sort', ...INVALID_PARAMS_PAGE]

export const parseQueryStringToWhere = ({
  filterItems,
  queryString
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString)
    .filter((query) => !INVALID_PARAMS.includes(query))
    .forEach((key) => {
      const item = filterItems?.find((item) => item.name === key)
      const type = item?.type
      const value = queryString[key]

      obj[key] =
        type !== CHECKBOX
          ? key === 'price'
            ? {
                lte: Number(value)
              }
            : value
          : key === 'categories'
          ? {
              slug: {
                in: value
              }
            }
          : {
              name: {
                in: value
              }
            }
    })

  return obj
}

export const parseQueryStringToFilter = ({
  filterItems,
  queryString
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString)
    .filter((query) => !INVALID_PARAMS_PAGE.includes(query))
    .forEach((key) => {
      const item = filterItems?.find((item) => item.name === key)
      const isCheckbox = item?.type === CHECKBOX
      const isArray = Array.isArray(queryString[key])

      obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key]
    })

  return obj
}

export function buildURL(path: string, query: Query) {
  let url = path

  if (query && Object.keys(query).length > 0) {
    for (const key in query) {
      const isArray = Array.isArray(query[key])

      if (isArray) {
        ;(query[key] as string[]).forEach((value) => {
          url += `&${key}=${value}`
        })
      } else {
        url += `&${key}=${query[key]}`
      }
    }
  }

  return url
}
