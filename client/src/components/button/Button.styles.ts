import styled, { DefaultTheme } from 'styled-components'
import { ButtonProps } from './Button'
import { css } from 'styled-components'
import { shouldForwardProps } from '@/styles/utils/shoulfForwardProp'
import { darken } from 'polished'

type ButtonContainerProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

const wrapperModifier = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 3rem;
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    height: 5rem;
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    height: 4rem;
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.2, theme.colors.primary)};
    }
  `
}

export const ButtonContainer = styled('button').withConfig(
  shouldForwardProps(['size', 'fullWidth', 'hasIcon', 'minimal'])
)<ButtonContainerProps>`
  ${({ size, theme, fullWidth, hasIcon, minimal }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border-radius: ${theme.border.radius};
    border: 0;
    color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;
    overflow: hidden;
    text-decoration: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    ${!!size && wrapperModifier[size](theme)}
    ${!!hasIcon && wrapperModifier.withIcon(theme)}
    ${!!fullWidth && wrapperModifier.fullWidth()}
    ${!!minimal && wrapperModifier.minimal(theme)}

    &:hover {
      background: ${minimal
        ? 'none'
        : 'linear-gradient(180deg, #e35565 0%, #d958a6 50%)'};
    }
  `}
`
