import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { RibbonContainer } from '../ribbon/ribbon.styles'

export const GameInfoContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small};

    ${RibbonContainer} {
      right: -1rem;

      &:before {
        border-right-width: 1rem;
      }
    }

    ${media.greaterThan('medium')`
      ${RibbonContainer} {
        right: ${theme.spacings.small};
        top: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};

        &:before {
          border: none;
        }
      }
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      max-width: 77rem
    `}
  `}
`

export const WrapperButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      width: 100%;
      margin-top: ${theme.spacings.xsmall};
    }

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;
      > button {
        width: initial;
        margin-top: 0;
      }
    `}
  `}
`
