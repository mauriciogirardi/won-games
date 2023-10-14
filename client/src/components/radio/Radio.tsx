'use client'

import { InputHTMLAttributes } from 'react'
import * as S from './Radio.styles'

type RadioValue = string | ReadonlyArray<string> | number
export type RadioProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  onCheck?: (value?: RadioValue) => void
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

export function Radio({
  label,
  onCheck,
  labelColor = 'white',
  labelFor = '',
  value,
  ...props
}: RadioProps) {
  const onChange = () => {
    onCheck?.(value)
  }

  return (
    <S.RadioContainer>
      <S.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.RadioContainer>
  )
}
