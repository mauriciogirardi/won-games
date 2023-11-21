import { Meta, StoryObj } from '@storybook/react'
import { ExploreSidebar } from './ExploreSidebar'
import { mockExploreSidebar } from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 240 }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof ExploreSidebar> = {
  args: {
    sidebars: mockExploreSidebar
  }
}

export const WithInitialValues: StoryObj<typeof ExploreSidebar> = {
  args: {
    sidebars: mockExploreSidebar,
    initialValues: {
      windows: true,
      sort_by: 'high-to-low',
      action: true
    }
  }
}
