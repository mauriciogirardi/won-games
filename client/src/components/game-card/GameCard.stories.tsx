import { Meta, StoryObj } from '@storybook/react'
import { GameCard } from './GameCard'

export default {
  title: 'GameCard',
  component: GameCard,
  decorators: [
    (Story) => (
      <div style={{ width: '30rem' }}>
        <Story />
      </div>
    )
  ]
} as Meta

const initialValues = {
  title: 'Read Dead Redemption',
  developer: 'Rackstar Games',
  price: '$215.00',
  img: '/img/red-dead-img.png'
}

export const Default: StoryObj<typeof GameCard> = {
  args: {
    ...initialValues
  }
}

export const WithPromotional: StoryObj<typeof GameCard> = {
  args: {
    ...initialValues,
    promotionalPrice: '$145.00'
  }
}

export const WithRibbon: StoryObj<typeof GameCard> = {
  args: {
    ...initialValues,
    promotionalPrice: '$145.00',
    ribbon: {
      name: '50%',
      color: 'primary',
      size: 'small'
    }
  }
}
