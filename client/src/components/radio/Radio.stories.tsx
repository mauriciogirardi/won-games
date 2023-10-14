import { Meta, StoryObj } from '@storybook/react'
import { Radio } from './Radio'

export default {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<typeof Radio> = {
  args: {
    label: 'Radio label',
    labelFor: 'radio'
  }
}
