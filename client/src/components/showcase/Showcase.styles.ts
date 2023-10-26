import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { GameCardSliderContainer } from '../game-card-slider/GameCardSlider.styles'
import { HighlightContainer } from '../highlight/Highlight.styles'
import { HeadingContainer } from '../heading/Heading.styles'
import { Container } from '../container/Container'
import { shouldForwardProps } from '@/styles/utils/shouldForwardProp'

export const ShowcaseContainer = styled(Container)
  .attrs({ as: 'section' })
  .withConfig(shouldForwardProps(['mt']))<{
  mt?: string
}>`
  ${({ theme, mt }) => css`
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

    ${!!mt &&
    css`
      margin-top: ${mt};
    `}
  `}
`
