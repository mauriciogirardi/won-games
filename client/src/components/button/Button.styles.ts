import styled, { DefaultTheme } from 'styled-components'
import { ButtonProps } from './Button'
import { css } from 'styled-components'
import { shouldForwardProps } from '@/styles/utils/shoulfForwardProp'

type ButtonContainerProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

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
  `
}

export const ButtonContainer = styled('button').withConfig(
  shouldForwardProps(['size', 'fullWidth', 'hasIcon'])
)<ButtonContainerProps>`
  ${({ size, theme, fullWidth, hasIcon }) => css`
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
    ${fullWidth && wrapperModifier.fullWidth()}

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }
  `}
`
