import { darken } from 'polished'
import styled, { css } from 'styled-components'
import { TextFieldContainer } from '../text-field/text-field.styles'
import { ButtonContainer } from '../button/button.styles'

export const FormContainer = styled.div`
  ${({ theme }) => css`
    ${TextFieldContainer} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonContainer} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
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
      outline: none;

      &:focus {
        color: ${darken(0.1, theme.colors.secondary)};
      }

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-color: ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`
