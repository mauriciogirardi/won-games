import { Meta, StoryObj } from '@storybook/react'
import { Slider, SliderSettings } from './Slider'

export default {
  title: 'Slider',
  component: Slider,
  argTypes: {
    children: {
      type: 'symbol'
    }
  }
} as Meta

type CardProps = {
  value: string
}
const Card = ({ value }: CardProps) => (
  <div
    style={{
      width: '100%',
      height: '25rem',
      background: '#333',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <p>{value}</p>
  </div>
)

const settings: SliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
}

export const Horizontal: StoryObj<typeof Slider> = {
  args: {
    children: (
      <Slider settings={settings}>
        <Card value="01" />
        <Card value="02" />
        <Card value="03" />
        <Card value="04" />
        <Card value="05" />
        <Card value="06" />
      </Slider>
    )
  }
}

const settingsVertical: SliderSettings = {
  speed: 500,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: StoryObj<typeof Slider> = {
  args: {
    children: (
      <Slider settings={settingsVertical}>
        <Card value="01" />
        <Card value="02" />
        <Card value="03" />
        <Card value="04" />
        <Card value="05" />
        <Card value="06" />
      </Slider>
    )
  }
}
