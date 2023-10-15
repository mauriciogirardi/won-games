import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { GameCardSliderContainer } from '../game-card-slider/GameCardSlider.styles'
import { HighlightContainer } from '../highlight/Highlight.styles'
import { HeadingContainer } from '../heading/Heading.styles'
import { Container } from '../container/Container'

export const ShowcaseContainer = styled(Container).attrs({ as: 'section' })`
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
