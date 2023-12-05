import { Container } from '@/components/container/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const GamesContainer = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      gap: ${theme.grid.gutter};
      grid-template-columns: 26rem 1fr;
    `}
  `}
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    > svg {
      color: ${theme.colors.primary};
    }

    &:hover {
      opacity: 0.8;
    }
  `}
`
