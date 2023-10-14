import Link from 'next/link'
import styled, { css } from 'styled-components'
import { TextFieldContainer } from '../text-field/TextField.styles'
import { ButtonContainer } from '../button/Button.styles'
import { darken, lighten } from 'polished'

export const FormSignInContainer = styled.div`
  ${({ theme }) => css`
    ${TextFieldContainer} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonContainer} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`

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

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-color: ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`
