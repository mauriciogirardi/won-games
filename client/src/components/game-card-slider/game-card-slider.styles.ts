import styled, { css } from 'styled-components'
import { GameCardSliderProps } from '.'
import media from 'styled-media-query'
import { shouldForwardProps } from '@/styles/utils/should-forward-prop'

type GameCardSliderContainerProps = Pick<GameCardSliderProps, 'color'>

export const GameCardSliderContainer = styled('section').withConfig(
  shouldForwardProps(['color', 'slideCount', 'currentSlide'])
)<GameCardSliderContainerProps>`
  ${({ theme, color }) => css`
    margin-top: ${theme.spacings.medium};

    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }
      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}

    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors[color!]};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.2rem;
      height: 2.2rem;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
