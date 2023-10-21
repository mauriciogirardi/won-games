import { Meta, StoryObj } from '@storybook/react'
import { FormSignIn } from './FormSignIn'
import { Center } from '@/utils/stories/Center'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
  parameters: {
    backgrounds: {
      default: 'won-light'
    }
  },
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    )
  ]
} as Meta

export const Default: StoryObj<typeof FormSignIn> = {}
