import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Center } from '@/utils/stories/Center'
import { ShoppingCart } from 'lucide-react'

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    )
  ],
  argTypes: {
    icon: {
      type: 'symbol',
      defaultValue: '<Icon />'
    }
  }
} as Meta

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Click me'
  }
}

export const WithIcon: StoryObj<typeof Button> = {
  args: {
    children: 'Click me',
    icon: <ShoppingCart />,
    size: 'small'
  }
}

export const JustIcon: StoryObj<typeof Button> = {
  args: {
    icon: <ShoppingCart />,
    size: 'small'
  }
}

export const AsLink: StoryObj<typeof Button> = {
  args: {
    children: 'Click me',
    as: 'a',
    href: '/link'
  }
}
