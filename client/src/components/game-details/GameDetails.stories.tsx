import { Meta, StoryObj } from '@storybook/react'
import { GameDetails } from './GameDetails'
import { mockGameDetails } from './mock'

export default {
  title: 'GameDetails',
  component: GameDetails,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    platforms: {
      description: 'This Array receive only 3 value mac, linux and windows'
    }
  }
} as Meta

export const Default: StoryObj<typeof GameDetails> = {
  args: { ...mockGameDetails, releaseDate: '2023-10-21T23:00:00' }
}
