import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const FormProfileContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    max-width: 100%;
    display: grid;
    gap: ${theme.spacings.medium};

    > button {
      margin-top: ${theme.spacings.small};
    }

    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;

      > button {
        grid-column: 2;
        justify-self: end;
        margin-top: 0;
        width: 40%;
      }
    `}
  `}
`
