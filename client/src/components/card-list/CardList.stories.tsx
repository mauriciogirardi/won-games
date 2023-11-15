import { Meta, StoryObj } from '@storybook/react'
import { CardList } from './CardList'
import { mockCardList } from './mock'

export default {
  title: 'Card/CardList',
  component: CardList
} as Meta

export const Default: StoryObj<typeof CardList> = {
  args: {
    items: mockCardList,
    total: '$ 405.00'
  }
}
