import { Meta, StoryObj } from '@storybook/react'
import { TextContent } from '.'
import { mockTextContent } from './mock/text-content'

export default {
  title: 'TextContent',
  component: TextContent
} as Meta

export const Default: StoryObj<typeof TextContent> = {
  args: mockTextContent
}
