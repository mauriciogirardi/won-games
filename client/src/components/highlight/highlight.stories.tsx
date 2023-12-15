import { Meta, StoryObj } from '@storybook/react'
import { Highlight } from '.'
import { mockHighlight } from './mocks/highlight'

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
    ...mockHighlight
  }
}

export const FloatImage: StoryObj<typeof Highlight> = {
  args: {
    ...mockHighlight,
    floatImage: '/img/red-dead-float.png'
  }
}
