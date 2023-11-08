import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonContainer } from '../button/Button.styles'
import { tint } from 'polished'
import { HeadingContainer } from '../heading/Heading.styles'

export const PaymentOptionsContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};

    ${HeadingContainer} {
      margin-bottom: 0;
    }
  `}
`

export const CardsList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xsmall};
  `}
`

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

const ItemsStyles = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.lightGray};
  border-radius: 0.2rem;
  color: ${theme.colors.black};
  padding: 0 ${theme.spacings.xxsmall};
  height: 5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const CardItem = styled.label`
  ${({ theme }) => css`
    ${ItemsStyles(theme)};
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const AddCard = styled.div`
  ${({ theme }) => css`
    ${ItemsStyles(theme)};
    gap: ${theme.spacings.xxsmall};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background-color: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    ${ButtonContainer} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`
