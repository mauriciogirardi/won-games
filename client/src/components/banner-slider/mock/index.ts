import { BannerProps } from '@/components/banner/Banner'

export const items: BannerProps[] = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subTitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLink: '/games/defy-death',
    buttonLabel: 'Buy now'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 3',
    subTitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLink: '/games/defy-death',
    buttonLabel: 'Buy now'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 2',
    subTitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLink: '/games/defy-death',
    buttonLabel: 'Buy now',
    ribbon: {
      name: '50% off',
      color: 'secondary'
    }
  }
]
