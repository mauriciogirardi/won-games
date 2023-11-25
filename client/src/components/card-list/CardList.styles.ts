import { shouldForwardProps } from '@/styles/utils/shouldForwardProp'
import { tint } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as EmptyStyles from '../empty/Empty.styles'

export const CardListContainer = styled.div.withConfig(
  shouldForwardProps(['isEmpty'])
)<{ isEmpty: boolean }>`
  ${({ theme, isEmpty }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;

    ${isEmpty &&
    css`
      ${EmptyStyles.EmptyContainer} {
        padding-bottom: ${theme.spacings.medium};
      }

      ${EmptyStyles.StyledImage} {
        max-width: 20rem;
        height: 20rem;
      }

      ${EmptyStyles.Title} {
        font-size: ${theme.font.sizes.large};
      }

      ${EmptyStyles.Description} {
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.medium};
      }
    `}
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
