import { Meta, StoryObj } from '@storybook/react'
import { FormSignUp } from './FormSignUp'
import { Center } from '@/utils/stories/Center'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp,
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    )
  ]
} as Meta

export const Default: StoryObj<typeof FormSignUp> = {}
