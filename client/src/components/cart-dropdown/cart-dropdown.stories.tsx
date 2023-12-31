import { Meta, StoryObj } from '@storybook/react'
import { CartDropdown } from '.'
import { mockCardList } from '../card-list/mock/mock-card-list'

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

export const Empty: StoryObj<typeof CartDropdown> = {}
