import { Meta, StoryObj } from '@storybook/react'
import { Showcase } from '.'
import { mockHighlight as highlight } from '@/components/highlight/mocks/highlight'
import { mockCardSlider } from '@/components/game-card-slider/mock/game-card-slider'

export default {
  title: 'Showcase',
  component: Showcase,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Showcase> = {
  args: {
    title: 'Show case',
    games: mockCardSlider,
    highlight
  }
}
