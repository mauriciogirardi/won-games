import { Meta, StoryObj } from '@storybook/react'
import { FormSignUp } from '.'
import { Center } from '@/utils/stories/center'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp,
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

export const Default: StoryObj<typeof FormSignUp> = {}
