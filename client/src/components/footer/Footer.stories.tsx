import { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

export default {
  title: 'Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '130rem',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 2rem)'
        }}
      >
        <div
          style={{
            marginTop: 'auto'
          }}
        >
          <Story />
        </div>
      </div>
    )
  ]
} as Meta

export const Default: StoryObj<typeof Footer> = {}
