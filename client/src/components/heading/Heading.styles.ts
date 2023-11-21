import styled, { DefaultTheme, css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps, LineColorType } from './Heading'
import { shouldForwardProps } from '@/styles/utils/shouldForwardProp'

export const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme, lineColor: LineColorType) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColorType) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }

    ${media.lessThan('medium')`
      &::after {
        border-bottom: 0.3rem solid ${theme.colors[lineColor]};
      }
    `}
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
      bottom: -0.5rem;
    }
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
    line-height: 120%;
    letter-spacing: -0.08125rem;
  `
}

export const HeadingContainer = styled('h2').withConfig(
  shouldForwardProps(['color', 'lineLeft', 'size', 'lineBottom', 'lineColor'])
)<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size, lineColor }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
