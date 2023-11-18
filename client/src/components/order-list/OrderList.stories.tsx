import { Meta, StoryObj } from '@storybook/react'
import { OrderList } from './OrderList'
import { mockOrderList } from './mock'

export default {
  title: 'Profile/OrderList',
  component: OrderList,
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

export const Default: StoryObj<typeof OrderList> = {
  args: {
    items: mockOrderList
  }
}
