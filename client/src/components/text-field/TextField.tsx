'use client'

import { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from 'react'
import * as S from './TextField.styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: ReactNode
  iconPosition?: 'right' | 'left'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export function TextField({
  label,
  initialValue = '',
  iconPosition = 'left',
  disabled = false,
  onInput,
  error = '',
  icon,
  name,
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setValue(newValue)
    onInput?.(newValue)
  }

  return (
    <S.TextFieldContainer disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>

      {!!error && <S.Error>{error}</S.Error>}
    </S.TextFieldContainer>
  )
}
