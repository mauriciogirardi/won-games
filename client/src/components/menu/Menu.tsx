'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, ShoppingBag, X, Menu as MenuIcon } from 'lucide-react'

import { Logo } from '@/components/logo/Logo'
import { Button } from '../button/Button'
import { MediaMatch } from '../media-match/MediaMatch'
import { PATH_HOME, PATH_SIGN_IN, PATH_SIGN_UP } from '@/constants/paths'
import * as S from './Menu.styles'

export type MenuProps = {
  username?: string
}

export function Menu({ username }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenu = () => setIsOpen(true)
  const handleCloseMenu = () => setIsOpen(false)

  return (
    <S.MenuContainer>
      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon aria-label="Open Menu" onClick={handleOpenMenu} />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href={PATH_HOME} passHref>
          <Logo hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href={PATH_HOME}>Home</S.MenuLink>
          <S.MenuLink href="/">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <Search aria-label="Search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <ShoppingBag aria-label="Open Shopping Cart" />
        </S.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href={PATH_SIGN_IN} passHref>
              <Button>Sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <X aria-label="Close Menu" onClick={handleCloseMenu} />

        <S.MenuNav>
          <S.MenuLink href={PATH_HOME}>Home</S.MenuLink>
          <S.MenuLink href="/">Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="/">My account</S.MenuLink>
              <S.MenuLink href="/">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href={PATH_SIGN_IN} passHref>
              <Button fullWidth size="medium">
                Login in now
              </Button>
            </Link>
            <span>or</span>
            <S.CreateAccount href={PATH_SIGN_UP} title="Sign Up">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.MenuContainer>
  )
}
