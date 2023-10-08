import { GameCardSliderContainer } from '@/components/game-card-slider/GameCardSlider.styles'
import { HeadingContainer } from '@/components/heading/Heading.styles'
import { HighlightContainer } from '@/components/highlight/Highlight.styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingContainer},
    ${HighlightContainer},
    ${GameCardSliderContainer} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightContainer} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }

    ${GameCardSliderContainer} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }
  `}
`

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

export const SectionNews = styled(Sections)`
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

export const SectionUpcoming = styled(Sections)`
  ${({ theme }) => css`
    ${HighlightContainer} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`

export const SectionFreeGames = styled(Sections)``
export const SectionMostPopular = styled(Sections)``
