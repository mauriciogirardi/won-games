import { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { Center } from '@/utils/stories/Center'

export default {
  title: 'Dropdown',
  component: Dropdown,
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    title: 'Click Here',
    children: 'content'
  }
}
