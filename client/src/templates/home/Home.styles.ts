import { HeadingContainer } from '@/components/heading/Heading.styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);
    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionNews = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      color: ${theme.colors.white};
    }

    margin-bottom: calc(${theme.spacings.xxlarge} * 2);
    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

      ${HeadingContainer} {
        color: ${theme.colors.black};
      }
    `}
  `}
`
