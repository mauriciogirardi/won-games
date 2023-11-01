import { Container } from '@/components/container/Container'
import { shouldForwardProps } from '@/styles/utils/shouldForwardProp'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type CoverProps = {
  src: string
}

export const Cover = styled.div.withConfig(
  shouldForwardProps(['src'])
)<CoverProps>`
  ${({ src }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 39.5rem;
    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.4;

    ${media.greaterThan('medium')`
      height: 50rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    `}
  `}
`

export const Main = styled.main`
  margin-top: 10rem;

  ${media.greaterThan('medium')`
    margin-top: 20rem
  `}
`

export const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2)
    `}
  `}
`

export const SectionGameInfo = styled(Section)``

export const SectionDescription = styled(Section)``

export const SectionDetails = styled(Section)``

export const SectionGallery = styled(Section)`
  display: none;

  ${media.greaterThan('medium')`
    display: block;
  `}
`
