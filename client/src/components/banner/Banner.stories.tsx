import { Meta, StoryObj } from '@storybook/react'
import { Banner } from './Banner'

export default {
  title: 'Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Banner> = {
  args: {
    img: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Defy death',
    subTitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLink: '/games/defy-death',
    buttonLabel: 'Buy now'
  }
}

export const BannerWithRibbon: StoryObj<typeof Banner> = {
  args: {
    img: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Defy death',
    subTitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLink: '/games/defy-death',
    buttonLabel: 'Buy now',
    ribbon: {
      name: 'Seller',
      color: 'secondary',
      size: 'normal'
    }
  }
}
