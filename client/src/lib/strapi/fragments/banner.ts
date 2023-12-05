export const bannerFragment = /* GraphQL */ `
  fragment bannerFragment on Banner {
    title
    subtitle
    image {
      data {
        attributes {
          url
          alt: alternativeText
        }
      }
    }
    button {
      label
      link
    }
    ribbon {
      text
      color
      size
    }
  }
`
