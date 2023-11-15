import { Meta, StoryObj } from '@storybook/react'
import { CardsList } from './CardsList'
import { mockPaymentOptions } from '../payment-options/mock'

export default {
  title: 'Card/CardsList',
  component: CardsList,
  parameters: {
    backgrounds: {
      default: 'won-light'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 860, margin: 'auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof CardsList> = {
  args: {
    cards: mockPaymentOptions
  }
}
