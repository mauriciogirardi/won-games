import styled from 'styled-components'
import { GameItemContainer } from '../game-item/game-item.styles'

export const OrderListContainer = styled.div`
  ${GameItemContainer} {
    &:last-child {
      border-bottom: 0;
    }
  }
`
