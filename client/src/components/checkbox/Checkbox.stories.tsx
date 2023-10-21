import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: StoryObj<typeof Checkbox> = {
  args: {
    label: 'John Doe',
    labelFor: 'name'
  }
}

export const Checked: StoryObj<typeof Checkbox> = {
  args: {
    label: 'John Doe',
    labelFor: 'name',
    isChecked: true
  }
}
