export const highlightFragment = /* GraphQL */ `
  fragment highlightFragment on ComponentPageHighlight {
    title
    subtitle
    buttonLink
    buttonLabel
    alignment
    background {
      data {
        attributes {
          src: url
        }
      }
    }
    floatImage {
      data {
        attributes {
          src: url
        }
      }
    }
  }
`
