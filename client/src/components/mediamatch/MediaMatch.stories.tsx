import { Meta, StoryObj } from '@storybook/react'
import { MediaMatch, MediaMatchProps } from './MediaMatch'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: StoryObj<MediaMatchProps> = {
  args: {
    greaterThan: 'medium'
  },
  decorators: [
    () => (
      <MediaMatch greaterThan="medium">
        <h1>Only On Desktop</h1>
      </MediaMatch>
    )
  ]
}

export const Mobile: StoryObj<MediaMatchProps> = {
  args: {
    lessThan: 'medium'
  },
  decorators: [
    () => (
      <MediaMatch lessThan="medium">
        <h1>Only On Mobile</h1>
      </MediaMatch>
    )
  ],
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
