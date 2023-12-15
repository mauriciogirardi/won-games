import { Meta, StoryObj } from '@storybook/react'
import { Footer } from '.'

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    backgrounds: {
      default: 'win-light'
    }
  },
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
