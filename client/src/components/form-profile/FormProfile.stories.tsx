import { Meta, StoryObj } from '@storybook/react'
import { FormProfile } from './FormProfile'

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 860, margin: 'auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof FormProfile> = {}
