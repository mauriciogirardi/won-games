import { shouldForwardProps } from '@/styles/utils/shouldForwardProp'
import styled, { css } from 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types'

type IconProps = {
  iconPosition: 'right' | 'left'
}

type InputProps = {
  iconPosition: 'right' | 'left'
}

type TextFieldContainerProps = {
  disabled: boolean
  error: boolean
}

const wrapperModifier = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,

  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }

    ${Label},
    ${Icon} {
      color: ${theme.colors.red};
    }
  `
}

export const TextFieldContainer = styled.div.withConfig(
  shouldForwardProps(['disabled', 'error'])
)<TextFieldContainerProps>`
  ${({ theme, disabled, error }) => css`
    ${error && wrapperModifier.error(theme)}
    ${disabled && wrapperModifier.disabled(theme)}
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xxsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    position: relative;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Icon = styled.div.withConfig(
  shouldForwardProps(['iconPosition'])
)<IconProps>`
  ${({ theme, iconPosition }) => css`
    width: 2.4rem;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`

export const Input = styled.input.withConfig(
  shouldForwardProps(['iconPosition'])
)<InputProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xxsmall};
    background-color: transparent;
    border: 0;
    outline: 0;
    width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`
export const Error = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.red};
  `}
`
