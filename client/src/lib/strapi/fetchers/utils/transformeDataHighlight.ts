import { HighlightProps } from '@/components/highlight/Highlight'
import { HighlightCommon } from '../../types/home'
import { baseUrl } from '../..'
import { IMAGE_DEFAULT } from '../../constants'

export function transformeDataHighlight(
  title?: string,
  data?: HighlightCommon | null
) {
  return {
    ...(title && { title }),
    highlight: {
      title: data?.title,
      backgroundImage:
        `${baseUrl}${data?.background.data.attributes.src}` || IMAGE_DEFAULT,
      floatImage:
        `${baseUrl}${data?.floatImage.data.attributes.src}` || IMAGE_DEFAULT,
      buttonLabel: data?.buttonLabel,
      buttonLink: data?.buttonLink,
      subtitle: data?.subtitle,
      alignment: data?.alignment
    } as HighlightProps
  }
}
