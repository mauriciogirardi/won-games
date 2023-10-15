import { Meta, StoryObj } from '@storybook/react'
import { Showcase } from './Showcase'
import { initialProps as highlight } from '@/components/highlight/mocks'
import { items } from '@/components/game-card-slider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
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
    games: items,
    highlight
  }
}
