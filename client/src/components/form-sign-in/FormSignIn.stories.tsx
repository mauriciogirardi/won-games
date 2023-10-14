import { Meta, StoryObj } from '@storybook/react'
import { FormSignIn } from './FormSignIn'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
  decorators: [
    (Story) => (
      <div style={{ width: 300, margin: 'auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof FormSignIn> = {}
