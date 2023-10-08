import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const FooterContainer = styled.footer``

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
    grid-template-columns: repeat(4, 1fr);

    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    nav {
      display: flex;
      flex-direction: column;
    }

    a,
    span {
      display: block;
      width: max-content;
      color: ${theme.colors.gray};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
      position: relative;
    }

    a:hover {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        height: 0.1rem;
        background-color: ${theme.colors.gray};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
        }

        to {
          width: 100%;
        }
      }
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`
