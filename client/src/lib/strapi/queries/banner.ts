import { bannerFragment } from '../fragments/banner'

export const getBannersQuery = /* GraphQL */ `
  query queryBanners {
    banners {
      data {
        attributes {
          ...bannerFragment
        }
      }
    }
  }
  ${bannerFragment}
`
