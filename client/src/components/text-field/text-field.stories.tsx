import { Meta, StoryObj } from '@storybook/react'
import { TextField } from '.'
import { Mail } from 'lucide-react'

export default {
  title: 'Form/TextField',
  component: TextField,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    icon: {
      type: 'symbol'
    }
  }
} as Meta

export const Default: StoryObj<typeof TextField> = {
  args: {
    label: 'Name',
    name: 'name',
    placeholder: 'Your name'
  }
}

export const InputWithIcon: StoryObj<typeof TextField> = {
  args: {
    label: 'E-mail',
    name: 'email',
    placeholder: 'john@doe.com',
    icon: <Mail />
  }
}

export const InputDisabled: StoryObj<typeof TextField> = {
  args: {
    label: 'E-mail',
    name: 'email',
    initialValue: 'John@doe.com',
    disabled: true
  }
}

export const InputWithError: StoryObj<typeof TextField> = {
  args: {
    label: 'E-mail',
    name: 'email',
    initialValue: 'John@doe.com',
    error: 'E-mail is not correctly!'
  }
}
