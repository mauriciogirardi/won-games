import { Meta, StoryObj } from '@storybook/react'

import { mockBannerSlicer } from './mock/banner-slicer'
import { BannerSlider } from '.'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  parameters: {
    layout: 'fullscreen'
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
    items: mockBannerSlicer
  }
}
