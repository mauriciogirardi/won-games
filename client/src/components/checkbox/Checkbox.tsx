'use client'

import * as S from './Checkbox.styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
}

export function Checkbox({
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) {
  return (
    <S.CheckboxContainer>
      <input id={labelFor} type="checkbox" />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.CheckboxContainer>
  )
}
