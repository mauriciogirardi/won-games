import { Meta, StoryObj } from '@storybook/react'
import { Highlight } from './Highlight'

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

const initialProps = {
  title: "Read Dead it's back",
  subtitle: "Come see John's new adventures",
  buttonLabel: 'Buy now',
  buttonLink: '/link',
  backgroundImage: '/img/red-dead-img.png'
}

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
