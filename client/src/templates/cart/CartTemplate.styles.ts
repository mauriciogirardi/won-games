import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      grid-template-columns: 2fr 1fr;
    `}
  `}
`
