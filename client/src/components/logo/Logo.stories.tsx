import { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'
import { Center } from '@/utils/stories/Center'

export default {
  title: 'Logo',
  component: Logo,
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Logo> = {}
