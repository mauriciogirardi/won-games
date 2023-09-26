import { Meta, StoryObj } from '@storybook/react'

import { themes } from "../themes";
import * as S from "./StylesGuide.styles";
import { TypeColors, TypeFontsSizes, TypeSpacing} from './StylesGuide.types';

function StylesGuide({ type }: { type: 'color' | 'fonts' | 'weight' | 'spacing'}) {
  const namesColors = Object.keys(themes.colors) as TypeColors[]
  const fontsNames = Object.keys(themes.font.sizes) as TypeFontsSizes[]
  const fontsWeight = [themes.font.bold, themes.font.light, themes.font.normal]
  const fontSizes = Object.values(themes.font.sizes)
  const spacingSizes = Object.values(themes.spacings)
  const spacingNames = Object.keys(themes.spacings) as TypeSpacing[]


  const fonts = fontsNames.map((font, index) => ({
    name: font,
    size: fontSizes[index],
  }));

  const spacings = spacingNames.map((spacing, index) => ({
    name: spacing,
    size: spacingSizes[index],
  }));

  if (type === 'color') {
    return (
      <S.ContainerColor>
        <S.Title>Colors</S.Title>

          {namesColors.map((name) => (
            <S.Wrapper  key={name}>
              <S.Colors bg={name}/>
              <span>{name}</span>
            </S.Wrapper>
          ))}
      </S.ContainerColor>
    )
  }

  if (type === 'fonts') {
    return (
      <S.ContainerColor>
        <S.Title>Fonts</S.Title>

          {fonts.map((font) => (
            <S.Wrapper  key={font.name}>
              <S.Size size={font.size} >Heading</S.Size>
              <span>{font.name}</span>
            </S.Wrapper>
          ))}
      </S.ContainerColor>
    )
  }

  if (type === 'weight') {
    return (
      <S.ContainerColor>
        <S.Title>Weight</S.Title>

          {fontsWeight.map((name) => (
            <S.Wrapper  key={name}>
              <S.Weight weight={name}>Heading</S.Weight>
              <span>{name}</span>
            </S.Wrapper>
          ))}
      </S.ContainerColor>
    )
  }

  if (type === 'spacing') {
    return (
      <S.ContainerColor>
        <S.Title>Spacings</S.Title>

          {spacings.map((spacing) => (
            <S.Wrapper  key={spacing.name}>
              <S.WrapperSpacing>
                <S.Spacing spacing={spacing.size} />
                <span>{spacing.size}</span>
              </S.WrapperSpacing>
              <span>{spacing.name}</span>
            </S.Wrapper>
          ))}
      </S.ContainerColor>
    )
  }

  return null
}

export default {
  title: 'StylesGuide',
  component: StylesGuide
} as Meta

export const Colors: StoryObj<typeof StylesGuide> = {
  args: {
    type: 'color'
  }
}

export const Fonts: StoryObj<typeof StylesGuide> = {
  args: {
    type: 'fonts'
  }
}

export const Weights: StoryObj<typeof StylesGuide> = {
  args: {
    type: 'weight'
  }
}

export const Spacings: StoryObj<typeof StylesGuide> = {
  args: {
    type: 'spacing'
  }
}
