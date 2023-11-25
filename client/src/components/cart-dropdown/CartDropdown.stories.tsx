import { Meta, StoryObj } from '@storybook/react'
import { CartDropdown } from './CartDropdown'
import { mockCardList } from '../card-list/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  decorators: [
    (Story) => (
      <div
        style={{ width: '98%', display: 'flex', justifyContent: 'flex-end' }}
      >
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof CartDropdown> = {
  args: {
    items: mockCardList,
    total: '$ 240.00'
  }
}
