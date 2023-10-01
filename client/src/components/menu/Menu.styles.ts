import Link from 'next/link'
import styled from 'styled-components'
import { css } from 'styled-components'
import media from 'styled-media-query'

const wrapperModifier = {
  transitions: (isOpen: boolean) => css`
    transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
    transition: transform 0.3s ease-in-out;
  `
}

export const MenuContainer = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    gap: ${theme.spacings.xsmall};
  `}
`

export const MenuFull = styled.nav<{ isOpen: boolean }>`
  ${({ isOpen, theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    overflow: hidden;
    inset: 0;

    height: 100vh;
    opacity: ${isOpen ? 1 : 0};
    background: ${theme.colors.white};
    pointer-events: ${isOpen ? 'all' : 'none'};

    transition: opacity 0.3s ease-in-out;

    > svg {
      width: 2.4rem;
      height: 2.4rem;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      flex: 1;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};

      ${wrapperModifier.transitions(isOpen)}
    }

    ${RegisterBox} {
      ${wrapperModifier.transitions(isOpen)}
    }
  `}
`

export const MenuNav = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
  `}
`

export const MenuLink = styled(Link)`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
        }

        to {
          width: 100%;
        }
      }
    }
  `}
`
export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreateAccount = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
