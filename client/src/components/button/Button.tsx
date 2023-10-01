'use client'

import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode
} from 'react'
import * as S from './Button.styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: ReactNode
  as?: ElementType
} & ButtonTypes

export function Button({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) {
  return (
    <S.ButtonContainer
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.ButtonContainer>
  )
}
