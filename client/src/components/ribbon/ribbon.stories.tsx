import { Meta, StoryObj } from '@storybook/react'
import { Ribbon } from '.'
import { Center } from '@/utils/stories/center'

export default {
  title: 'Ribbon',
  component: Ribbon,
  decorators: [
    (Story) => (
      <Center>
        <div
          style={{
            width: '40rem',
            height: '25rem',
            position: 'relative',
            background: '#888'
          }}
        >
          <Story />
        </div>
      </Center>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Ribbon> = {
  args: {
    children: 'Best Seller'
  }
}
