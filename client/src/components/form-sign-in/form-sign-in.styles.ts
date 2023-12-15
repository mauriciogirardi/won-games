import Link from 'next/link'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const ForgetPassword = styled(Link)`
  ${({ theme }) => css`
    text-align: right;
    display: block;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    transition: color, ${theme.transition.fast};
    text-decoration: none;

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`
