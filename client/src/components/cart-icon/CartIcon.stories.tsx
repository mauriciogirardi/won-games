import { Meta, StoryObj } from '@storybook/react'
import { CartIcon } from './CartIcon'

export default {
  title: 'CartIcon',
  component: CartIcon
} as Meta

export const Default: StoryObj<typeof CartIcon> = {}

export const WithItems: StoryObj<typeof CartIcon> = {
  args: {
    quantity: 8
  }
}
