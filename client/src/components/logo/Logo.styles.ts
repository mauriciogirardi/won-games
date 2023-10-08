import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { LogoProps } from './Logo'
import { shouldForwardProps } from '@/styles/utils/shoulfForwardProp'

const wrapperModifiers = {
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    `}
  `
}

export const LogoContainer = styled('div').withConfig(
  shouldForwardProps(['color', 'size', 'hideOnMobile'])
)<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};
    ${wrapperModifiers[size!]};
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
