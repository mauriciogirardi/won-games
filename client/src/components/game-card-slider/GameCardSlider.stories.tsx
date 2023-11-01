import { Meta, StoryObj } from '@storybook/react'
import { GameCardSlider } from './GameCardSlider'
import { items } from './mock'

export default {
  title: 'Game/GameCardSlider',
  component: GameCardSlider,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj<typeof GameCardSlider> = {
  args: {
    items
  }
}
