import { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './pagination'

export default {
  title: 'Pagination',
  component: Pagination
} as Meta

export const Default: StoryObj<typeof Pagination> = {
  args: {
    page: 1,
    pageSize: 10,
    total: 123
  }
}
