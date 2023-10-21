import { Meta, StoryObj } from '@storybook/react'
import { Radio } from './Radio'

export default {
  title: 'Form/Radio',
  component: Radio
} as Meta

export const Default: StoryObj<typeof Radio> = {
  args: {
    label: 'Radio label',
    labelFor: 'radio'
  }
}
