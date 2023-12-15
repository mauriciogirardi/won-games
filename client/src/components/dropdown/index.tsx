'use client'

import { ReactNode, useState } from 'react'
import * as S from './dropdown.styles'

export type DropdownProps = {
  title: ReactNode
  children: ReactNode
}

export function Dropdown({ children, title }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.DropdownContainer isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen((prevState) => !prevState)}>
        {title}
      </S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.DropdownContainer>
  )
}
