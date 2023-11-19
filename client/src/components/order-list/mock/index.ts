import { GameItemProps } from '@/components/game-item/GameItem'

export const mockOrderList: GameItemProps[] = [
  {
    img: '/img/games/cyberpunk-1.jpg',
    price: '$ 145.00',
    title: 'Cyberpunk 01',
    downloadLink: '/cyberpunk-01',
    paymentInfo: {
      flag: 'visa',
      img: '/img/visa.svg',
      number: '**** **** **** 4589',
      purchaseDate: 'Purchase made on 08/20/2023 at 21:12'
    }
  },
  {
    img: '/img/games/cyberpunk-2.jpg',
    price: '$ 145.00',
    title: 'Cyberpunk 02',
    downloadLink: '/cyberpunk-02',
    paymentInfo: {
      flag: 'mastercard',
      img: '/img/master-card.svg',
      number: '**** **** **** 3256',
      purchaseDate: 'Purchase made on 08/20/2023 at 21:12'
    }
  }
]
