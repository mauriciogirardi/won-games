import {
  FilterItemsType,
  parseQueryStringToWhere,
  parseQueryStringToFilter,
  buildURL
} from '.'

const filterItems: FilterItemsType = [
  { name: 'price', type: 'radio' },
  { name: 'platforms', type: 'checkbox' },
  { name: 'developers', type: 'checkbox' },
  { name: 'sort', type: 'radio' }
]

const queryString = {
  price: 100,
  platforms: ['windows', 'linux'],
  developers: ['Rockstar Games'],
  sort: 'price:asc'
}

describe('parseQueryStringToWhere()', () => {
  it('should parse queryString to where format', () => {
    const parseQuery = parseQueryStringToWhere({ queryString, filterItems })

    expect(parseQuery).toStrictEqual({
      price: {
        lte: 100
      },
      platforms: {
        name: { in: ['windows', 'linux'] }
      },
      developers: {
        name: {
          in: ['Rockstar Games']
        }
      }
    })
  })
})

describe('parseQueryStringToFilter()', () => {
  it('should parse queryString to filter values format', () => {
    const parseQuery = parseQueryStringToFilter({ queryString, filterItems })

    expect(parseQuery).toStrictEqual({
      sort: 'price:asc',
      price: 100,
      platforms: ['windows', 'linux'],
      developers: ['Rockstar Games']
    })
  })
})

describe('buildURL()', () => {
  it('should parse to query url', () => {
    const path = '/games?page=1&pageSize=15'
    const query = {
      platforms: ['windows', 'linux'],
      price: '100'
    }

    const parseUrl = buildURL(path, query)

    expect(parseUrl).toEqual(
      `${path}&platforms=windows&platforms=linux&price=100`
    )
  })

  it('should parse just path', () => {
    const path = '/games?page=1&pageSize=15'
    const query = {}

    const parseUrl = buildURL(path, query)

    expect(parseUrl).toEqual(`${path}`)
  })
})
