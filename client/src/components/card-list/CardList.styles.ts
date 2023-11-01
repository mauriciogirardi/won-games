import { tint } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const CardListContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background-color: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.small}
    `}
  `}
`

export const Total = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
