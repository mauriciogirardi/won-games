import { HeadingContainer } from '@/components/heading/heading.styles'
import { LogoContainer } from '@/components/logo/logo.styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const AuthContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  ${media.lessThan('medium')`
    grid-template-columns:  1fr;
  `}
`

export const WrapperTitles = styled.div`
  max-width: 60rem;
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    background-image: url(/img/auth-bg.png);
    background-size: cover;
    background-position: center center;
    position: relative;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: ${theme.colors.black};
      opacity: 0.85;
    }

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    position: relative;
    color: ${theme.colors.white};
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;

    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};
    max-width: 38rem;

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    text-align: center;
    align-self: end;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${LogoContainer} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingContainer} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${media.greaterThan('medium')`
      width: 36rem;
    `}
  `}
`
