import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<typeof Checkbox> = {
  args: {
    label: 'John Doe',
    labelFor: 'name'
  }
}
