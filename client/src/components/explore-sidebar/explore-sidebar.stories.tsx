import { Meta, StoryObj } from '@storybook/react'
import { ExploreSidebar } from '.'
import { mockExploreSidebar } from './mock/explore-sidebar'

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
    onFilter: () => ({}),
    sidebars: mockExploreSidebar
  }
}

export const WithInitialValues: StoryObj<typeof ExploreSidebar> = {
  args: {
    onFilter: () => ({}),
    sidebars: mockExploreSidebar,
    initialValues: {
      platforms: ['windows', 'linux'],
      sort_by: 'high-to-low'
    }
  }
}
