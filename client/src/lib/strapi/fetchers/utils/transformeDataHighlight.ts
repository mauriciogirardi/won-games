import { HighlightProps } from '@/components/highlight/Highlight'
import { HighlightCommon } from '../../types/home'
import { IMAGE_DEFAULT } from '../../constants'
import { BASE_URL } from '@/constants'

export function transformeDataHighlight(
  title?: string,
  data?: HighlightCommon | null
) {
  return {
    ...(title && { title }),
    highlight: {
      title: data?.title,
      backgroundImage:
        `${BASE_URL}${data?.background.data.attributes.src}` || IMAGE_DEFAULT,
      floatImage:
        `${BASE_URL}${data?.floatImage.data.attributes.src}` || IMAGE_DEFAULT,
      buttonLabel: data?.buttonLabel,
      buttonLink: data?.buttonLink,
      subtitle: data?.subtitle,
      alignment: data?.alignment
    } as HighlightProps
  }
}
