import { shouldForwardProps } from '@/styles/utils/should-forward-prop'
import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`
      display: block
    `}
  `,

  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`
      display: block
    `}
  `
}

export const MediaMatch = styled('div').withConfig(
  shouldForwardProps(['lessThan', 'greaterThan'])
)<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`
