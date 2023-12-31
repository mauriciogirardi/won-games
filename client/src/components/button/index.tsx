'use client'

import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode
} from 'react'
import * as S from './button.styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: ReactNode
  as?: ElementType
} & ButtonTypes

export function Button({
  children,
  size = 'medium',
  fullWidth = false,
  minimal = false,
  icon,
  ...props
}: ButtonProps) {
  return (
    <S.ButtonContainer
      size={size}
      fullWidth={fullWidth}
      minimal={minimal}
      hasIcon={!!icon}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.ButtonContainer>
  )
}
