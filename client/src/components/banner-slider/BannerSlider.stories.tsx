import { Meta, StoryObj } from '@storybook/react'
import { BannerSlider } from './BannerSlider'
import { BannerProps } from '../banner/Banner'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta

const items: BannerProps[] = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
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
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 3',
    subTitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLink: '/games/defy-death',
    buttonLabel: 'Buy now'
  }
]

export const Default: StoryObj<typeof BannerSlider> = {
  args: {
    items
  }
}
