import { shouldForwardProps } from '@/styles/utils/shoulfForwardProp'
import styled, { css } from 'styled-components'
import { CheckboxProps } from './Checkbox'

type LabelProps = Pick<CheckboxProps, 'labelColor'>

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.darkGray};
    border-radius: 0.2rem;
    position: relative;
    outline: none;
    transition: background-color border ${theme.transition.fast};

    &::before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      transition: ${theme.transition.fast};
      opacity: 0;
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};
      background-color: ${theme.colors.primary};

      &::before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled('label').withConfig(
  shouldForwardProps(['labelColor'])
)<LabelProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    line-height: 1;
  `}
`
