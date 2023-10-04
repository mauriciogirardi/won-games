import { Meta, StoryObj } from '@storybook/react'
import { GameCardSlider } from './GameCardSlider'
import { GameCardProps } from '../game-card/GameCard'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

const items: GameCardProps[] = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    price: '$215.00',
    developer: 'Rackstar Games'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 4',
    price: '$215.00',
    developer: 'Rackstar Games'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 10',
    price: '$215.00',
    developer: 'Rackstar Games'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 16',
    price: '$215.00',
    developer: 'Rackstar Games'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 2',
    price: '$215.00',
    developer: 'Rackstar Games',
    promotionalPrice: '$115.00'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 3',
    developer: 'Rackstar Games',
    price: '$215.00'
  }
]

export const Default: StoryObj<typeof GameCardSlider> = {
  args: {
    items
  }
}
