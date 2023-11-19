import { Meta, StoryObj } from '@storybook/react'
import { FormProfile } from './FormProfile'

export default {
  title: 'Profile/FormProfile',
  component: FormProfile,
  parameters: {
    backgrounds: {
      default: 'won-light'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 860, margin: 'auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof FormProfile> = {}
