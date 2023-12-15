import { shouldForwardProps } from '@/styles/utils/should-forward-prop'
import styled, { css } from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`

export const Ul = styled.ul`
  ${({ theme }) => css`
    display: flex;
    list-style: none;
    align-items: flex-end;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const Li = styled.li.withConfig(shouldForwardProps(['isNotPage']))<{
  isNotPage: boolean
  isCurrentPage: boolean
}>`
  ${({ theme, isNotPage, isCurrentPage }) => css`
    background: ${isNotPage ? 'transparent' : theme.colors.darkGray};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    cursor: pointer;

    transition: background 0.3s;

    ${isCurrentPage &&
    css`
      background-color: ${theme.colors.primary};
    `}

    ${isNotPage &&
    css`
      line-height: 1;
      letter-spacing: 0.5rem;
    `}

    ${!isNotPage &&
    css`
      &:hover:not(:disabled) {
        background: ${theme.colors.primary};
      }
    `}

    a {
      color: ${theme.colors.white};
      text-decoration: none;
      display: block;
      padding: 0.5rem ${theme.spacings.xsmall};
    }
  `}
`
