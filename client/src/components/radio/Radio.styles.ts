import styled, { css } from 'styled-components'
import { RadioProps } from './Radio'
import { shouldForwardProps } from '@/styles/utils/shoulfForwardProp'

type LabelProps = Pick<RadioProps, 'labelColor'>

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    background: transparent;
    outline: none;
    cursor: pointer;
    transition: background ${theme.transition.fast};

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &::before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background-color: ${theme.colors.primary};
      transition: opacity ${theme.transition.fast};
      position: absolute;
      opacity: 0;
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label.withConfig(
  shouldForwardProps(['labelColor'])
)<LabelProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    line-height: 1;
    cursor: pointer;
  `}
`
