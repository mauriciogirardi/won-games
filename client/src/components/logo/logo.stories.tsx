import { Meta, StoryObj } from '@storybook/react'
import { Logo } from '.'
import { Center } from '@/utils/stories/center'

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
