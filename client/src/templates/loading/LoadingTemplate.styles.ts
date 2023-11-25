import { LogoContainer } from '@/components/logo/Logo.styles'
import styled from 'styled-components'
import { css } from 'styled-components'

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Spin = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${({ theme }) => css`
    border: 1rem solid ${theme.colors.white};
    border-top: 1rem solid ${theme.colors.primary};
    border-radius: 50%;
    width: 18rem;
    height: 18rem;
    animation: spin 1s linear infinite;
  `}
`

export const Wrapper = styled.div`
  position: relative;

  ${LogoContainer} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
