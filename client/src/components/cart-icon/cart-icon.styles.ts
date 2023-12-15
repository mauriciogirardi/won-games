import styled, { css } from 'styled-components'

export const CartIconContainer = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.white};
    position: relative;
  `}
`
export const Badge = styled.span`
  ${({ theme }) => css`
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: 1rem;
    border-radius: 50%;
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
  `}
`
