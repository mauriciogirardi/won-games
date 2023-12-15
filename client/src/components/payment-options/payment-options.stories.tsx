import { Meta, StoryObj } from '@storybook/react'
import { PaymentOptions } from '.'
import { mockPaymentOptions } from './mock/payment-options'
import { Center } from '@/utils/stories/center'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  decorators: [
    (Story) => (
      <Center>
        <div style={{ width: 400 }}>
          <Story />
        </div>
      </Center>
    )
  ]
} as Meta

export const Default: StoryObj<typeof PaymentOptions> = {
  args: {
    cards: mockPaymentOptions
  }
}
