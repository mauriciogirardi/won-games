import { Meta, StoryObj } from '@storybook/react'
import { Highlight } from './Highlight'
import { initialProps } from './mocks'

export default {
  title: 'Highlight',
  component: Highlight,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Highlight> = {
  args: {
    ...initialProps
  }
}

export const FloatImage: StoryObj<typeof Highlight> = {
  args: {
    ...initialProps,
    floatImage: '/img/red-dead-float.png'
  }
}
