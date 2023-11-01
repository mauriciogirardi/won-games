import { shouldForwardProps } from '@/styles/utils/shouldForwardProp'
import { darken } from 'polished'
import styled, { DefaultTheme, css } from 'styled-components'

type PriceProps = {
  isPromotional?: boolean
}

const wrapperModifier = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
  `,

  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xsmall};
  `
}

export const GameCardContainer = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
  `}
`

export const ImageBox = styled.div`
  height: 14rem;
  width: 100%;
  background-color: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80ren 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    padding: ${theme.spacings.xsmall};
  `}
`

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: 1.2rem;
    top: 1rem;
    cursor: pointer;

    :hover {
      color: ${darken(0.1, theme.colors.primary)};
    }

    svg {
      width: 2.5rem;
    }
  `}
`

export const BuyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.3rem;
  margin-top: 1rem;
`

export const Price = styled('div').withConfig(
  shouldForwardProps(['isPromotional'])
)<PriceProps>`
  ${({ theme, isPromotional }) => css`
    font-weight: ${theme.font.bold};

    height: 3rem;
    display: inline-flex;
    align-items: center;

    ${!isPromotional && wrapperModifier.default(theme)}
    ${isPromotional && wrapperModifier.promotional(theme)}
  `}
`
