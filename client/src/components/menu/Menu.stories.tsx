import { Meta, StoryObj } from '@storybook/react'
import { Menu } from './Menu'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    background: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<typeof Menu> = {}

export const MenuWithSignIn: StoryObj<typeof Menu> = {
  args: {
    username: 'John Doe'
  }
}
