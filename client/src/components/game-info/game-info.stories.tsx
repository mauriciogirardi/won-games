import { Meta, StoryObj } from '@storybook/react'
import { GameInfo } from '.'
import { mockGameInfo } from './mock/game-info'
import { Center } from '@/utils/stories/center'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  decorators: [
    (Story) => (
      <Center>
        <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
          <Story />
        </div>
      </Center>
    )
  ]
} as Meta

export const Default: StoryObj<typeof GameInfo> = {
  args: {
    ...mockGameInfo
  }
}
