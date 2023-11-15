import { UserCircle, CreditCard, List, LogOut } from 'lucide-react'
import * as S from './ProfileMenu.styles'
import {
  PATH_LOGOUT,
  PATH_PROFILE_CARDS,
  PATH_PROFILE_ME,
  PATH_PROFILE_ORDERS
} from '@/constants/paths'
import { ActiveLink } from './ActiveLink'

export type PathsLinkTypes =
  | typeof PATH_PROFILE_CARDS
  | typeof PATH_PROFILE_ME
  | typeof PATH_PROFILE_ORDERS

export type ProfileMenuProps = {
  activeLink?: PathsLinkTypes
}

const menus = [
  {
    icon: UserCircle,
    name: 'My profile',
    path: PATH_PROFILE_ME
  },
  {
    icon: CreditCard,
    name: 'My cards',
    path: PATH_PROFILE_CARDS
  },
  {
    icon: List,
    name: 'My orders',
    path: PATH_PROFILE_ORDERS
  },
  {
    icon: LogOut,
    name: 'Sign out',
    path: PATH_LOGOUT
  }
]

export function ProfileMenu({ activeLink }: ProfileMenuProps) {
  return (
    <S.Nav>
      {menus.map((menu) => (
        <ActiveLink
          key={menu.path}
          isActive={activeLink === menu.path}
          {...menu}
        />
      ))}
    </S.Nav>
  )
}
