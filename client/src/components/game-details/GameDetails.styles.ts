import { shouldForwardProps } from '@/styles/utils/shouldForwardProp'
import styled, { DefaultTheme, css } from 'styled-components'
import media from 'styled-media-query'

type Colors = 'red' | 'green' | 'orange' | 'transparent'
type RatingProps = {
  color: Colors
}

const wrapperModifier = {
  ratingFree: () => css`
    ${Description}
  `,

  ratingNormal: (theme: DefaultTheme, color: Colors) => css`
    background: ${theme.colors[color]};
    width: 35px;
    height: 35px;
    border: 0.2rem solid ${theme.colors.white};
    border-radius: ${theme.border.radius};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
  `
}

export const GameDetailsContainer = styled.div`
  margin: ${({ theme }) => theme.spacings.small} 0;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr)
    `}

    ${media.greaterThan('large')`
      grid-template-columns: repeat(6, 1fr)
    `}
  `}
`

export const Block = styled.div``

export const Icon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Label = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.gray};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`

export const Rating = styled.div.withConfig(
  shouldForwardProps(['color'])
)<RatingProps>`
  ${({ theme, color }) => css`
    ${color === 'transparent' && wrapperModifier.ratingFree()}
    ${color !== 'transparent' && wrapperModifier.ratingNormal(theme, color)}
  `}
`
