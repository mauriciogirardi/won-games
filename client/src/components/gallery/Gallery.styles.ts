import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { shouldForwardProps } from '@/styles/utils/shouldForwardProp'

const wrapperModifier = {
  open: () => css`
    opacity: 1;
    cursor: pointer;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const GalleryContainer = styled('section')`
  ${({ theme }) => css`
    img {
      cursor: pointer;
    }

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
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
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

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: right;
    cursor: default;

    > svg {
      cursor: pointer;
      margin: 1rem;
    }
  `}
`

export const Content = styled.div`
  max-width: min(120rem, 100%);
  max-height: 80rem;
`

export const Modal = styled.div.withConfig(shouldForwardProps(['isOpen']))<{
  isOpen: boolean
}>`
  ${({ isOpen, theme }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    transition: ${theme.transition.default};

    ${isOpen && wrapperModifier.open()}
    ${!isOpen && wrapperModifier.close()}
  `}
`
