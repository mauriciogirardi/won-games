import { Meta, StoryObj } from '@storybook/react'
import { Gallery } from '.'
import { mockGallery } from './mock/mock-gallery'

export default {
  title: 'Gallery',
  component: Gallery,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '120rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
} as Meta

export const Default: StoryObj<typeof Gallery> = {
  args: {
    items: mockGallery
  }
}
