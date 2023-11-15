'use client'

import { LucideIcon } from 'lucide-react'
import * as S from './ProfileMenu.styles'

type ActiveLinkProps = {
  path: string
  icon: LucideIcon
  name: string
  isActive?: boolean
}

export function ActiveLink({
  icon: Icon,
  name,
  path,
  isActive
}: ActiveLinkProps) {
  return (
    <S.LinkMenu href={path} isActive={isActive} title={name} passHref>
      <Icon size={24} />
      <span>{name}</span>
    </S.LinkMenu>
  )
}
