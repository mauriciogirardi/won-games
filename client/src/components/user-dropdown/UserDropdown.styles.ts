import Link from 'next/link'
import styled, { css } from 'styled-components'

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 26rem;

    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
    }
  `}
`

export const WrapperLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: background, color, ${theme.transition.default};
    gap: 1rem;

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `}
`
