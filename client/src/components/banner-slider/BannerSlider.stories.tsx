import { Meta, StoryObj } from '@storybook/react'
import { BannerSlider } from './BannerSlider'
import { items } from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof BannerSlider> = {
  args: {
    items
  }
}
