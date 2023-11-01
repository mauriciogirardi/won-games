import { Meta, StoryObj } from '@storybook/react'
import { Empty } from './Empty'
import { Center } from '@/utils/stories/Center'

export default {
  title: 'Empty',
  component: Empty,
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Empty> = {
  args: {
    title: 'Title Empty',
    hasLink: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, magnam corrupti non dolore necessitatibus ipsum! Illo laborum doloremque molestiae quos tempora impedit sapiente recusandae in quae, aperiam a perferendis repudiandae.'
  }
}
