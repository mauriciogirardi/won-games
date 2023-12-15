import { Meta, StoryObj } from '@storybook/react'
import { CardsList } from '.'
import { mockPaymentOptions } from '../payment-options/mock/payment-options'

export default {
  title: 'Profile/CardsList',
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
