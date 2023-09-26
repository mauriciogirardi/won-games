import styled from "styled-components";
import { TypeColors } from "./StylesGuide.types";

export const ContainerColor = styled.div`
  padding: 5rem;
`

export const Colors = styled.div<{bg: TypeColors}>`
  background-color: ${({theme, bg}) => theme.colors[bg]};
  height: 4rem;
  width: 50%;
`

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid gray;
  margin-bottom: 2rem;

  span {
    display: inline-block;
    font-size: 1rem;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 2rem;
`

export const Size = styled.div<{size: string}>`
  font-size: ${({size}) => size}
`

export const Weight = styled.div<{weight: number}>`
  font-size: 1.6rem;
  font-weight: ${({weight}) => weight};
`
export const Spacing = styled.div<{spacing: string}>`
  width: ${({spacing}) => spacing};
  height: 2rem;
  background-color: ${({theme}) => theme.colors.secondary};
`

export const WrapperSpacing = styled.div`
  display: flex;
  gap: 1rem;
`
