import { Meta, StoryObj } from '@storybook/react'
import { GameInfo } from './GameInfo'
import { mockGameInfo } from './mock/mockGameInfo'
import { Center } from '@/utils/stories/Center'

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
