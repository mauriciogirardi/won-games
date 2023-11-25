import { Container } from '@/components/container/Container'
import styled from 'styled-components'
import * as StylesEmpty from '@/components/empty/Empty.styles'

export const NotFoundContainer = styled(Container)`
  ${StylesEmpty.StyledImage} {
    @keyframes animationY {
      from {
        transform: translateY(-3rem);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    animation: animationY 0.3s ease-in;
  }

  ${StylesEmpty.Description}, ${StylesEmpty.Title},  ${StylesEmpty.StyledLink} {
    @keyframes animationContentY {
      from {
        transform: translateY(3rem);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    animation: animationContentY 0.3s ease-in;
  }
`
