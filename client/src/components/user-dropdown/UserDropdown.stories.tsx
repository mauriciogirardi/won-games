import { Meta, StoryObj } from '@storybook/react'
import { UserDropdown } from './UserDropdown'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
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

export const Default: StoryObj<typeof UserDropdown> = {
  args: {
    username: 'John Doe'
  }
}
