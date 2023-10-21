import { Meta, StoryObj } from '@storybook/react'
import { TextContent } from './TextContent'
import { mockTextContent } from './mock'

export default {
  title: 'TextContent',
  component: TextContent
} as Meta

export const Default: StoryObj<typeof TextContent> = {
  args: mockTextContent
}
