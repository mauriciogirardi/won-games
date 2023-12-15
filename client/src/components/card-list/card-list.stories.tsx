import { Meta, StoryObj } from '@storybook/react'
import { CardList } from '.'
import { mockCardList } from './mock/mock-card-list'

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

export const WithButton: StoryObj<typeof CardList> = {
  args: {
    items: mockCardList,
    total: '$ 405.00',
    hasButton: true
  }
}

export const Empty: StoryObj<typeof CardList> = {}
