import Image from 'next/image'
import styled, { css } from 'styled-components'

export const EmptyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const StyledImage = styled(Image)`
  max-width: 100%;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};
    max-width: 70rem;
  `}
`
