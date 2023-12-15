'use client'

import { UserCircle, ChevronDown, Heart, LogOut } from 'lucide-react'

import { Dropdown } from '../dropdown'

import * as S from './user-dropdown.styles'
import { PATH_LOGOUT, PATH_PROFILE_ME, PATH_WISHLIST } from '@/constants/paths'

export type UserDropdownProps = {
  username: string
}

export function UserDropdown({ username }: UserDropdownProps) {
  return (
    <Dropdown
      title={
        <S.User>
          <UserCircle size={24} />
          {username}
          <ChevronDown size={24} />
        </S.User>
      }
    >
      <S.Nav>
        <S.WrapperLink href={PATH_PROFILE_ME}>
          <UserCircle size={22} />
          <span>My Account</span>
        </S.WrapperLink>
        <S.WrapperLink href={PATH_WISHLIST}>
          <Heart size={22} />
          <span>Wishlist</span>
        </S.WrapperLink>
        <S.WrapperLink href={PATH_LOGOUT}>
          <LogOut size={22} />
          <span>Sign out</span>
        </S.WrapperLink>
      </S.Nav>
    </Dropdown>
  )
}
