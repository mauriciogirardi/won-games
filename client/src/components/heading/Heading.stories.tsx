import { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'
import { Center } from '@/utils/stories/Center'

export default {
  title: 'Heading',
  component: Heading,
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    )
  ],
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj<typeof Heading> = {
  args: {
    children: 'Most Popular',
    color: 'white'
  }
}
