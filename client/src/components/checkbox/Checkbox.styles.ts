import { shouldForwardProps } from '@/styles/utils/shoulfForwardProp'
import styled, { css } from 'styled-components'
import { CheckboxProps } from './Checkbox'

type LabelProps = Pick<CheckboxProps, 'labelColor'>

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Label = styled('label').withConfig(
  shouldForwardProps(['labelColor'])
)<LabelProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`
