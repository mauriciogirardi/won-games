import styled, { css } from 'styled-components'

import { GameCardSliderContainer } from '../game-card-slider/game-card-slider.styles'
import { HeadingContainer } from '../heading/heading.styles'
import { Container } from '../container'
import { shouldForwardProps } from '@/styles/utils/should-forward-prop'

export const ShowcaseContainer = styled(Container)
  .attrs({ as: 'section' })
  .withConfig(shouldForwardProps(['mt']))<{
  mt?: string
}>`
  ${({ theme, mt }) => css`
    ${GameCardSliderContainer} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HeadingContainer} {
      margin-top: ${theme.spacings.xxlarge};
      margin-bottom: ${theme.spacings.medium};
    }

    ${!!mt &&
    css`
      margin-top: ${mt};
    `}
  `}
`
