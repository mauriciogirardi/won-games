import { Meta, StoryObj } from '@storybook/react'
import { GameItem } from '.'
import { Center } from '@/utils/stories/center'

export default {
  title: 'Game/GameItem',
  component: GameItem,
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    )
  ]
} as Meta

export const Default: StoryObj<typeof GameItem> = {
  args: {
    img: '/img/games/cyberpunk-1.jpg',
    title: 'Red Dead Redemption 2',
    price: '$ 215,00'
  }
}

export const WithPayment: StoryObj<typeof GameItem> = {
  args: {
    img: '/img/games/cyberpunk-1.jpg',
    title: 'Red Dead Redemption 2',
    price: '$ 215,00',
    downloadLink: 'https://link',
    paymentInfo: {
      flag: 'mastercard',
      img: '/img/master-card.svg',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:37'
    }
  }
}
