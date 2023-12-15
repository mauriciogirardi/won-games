import { BannerProps } from '@/components/banner'
import { IMAGE_DEFAULT } from '../../constants'
import { AttributesBanner } from '../../types/home'
import { BASE_URL } from '@/constants'

export function transformeDataBanners(banners: AttributesBanner[]) {
  return banners.map(({ attributes }) => {
    const { button, image, ribbon, subtitle, title } = attributes

    return {
      title,
      subtitle,
      buttonLabel: button.label,
      buttonLink: button.link,
      img: `${BASE_URL}${image.data.attributes.url}` || IMAGE_DEFAULT,
      ribbon: {
        name: ribbon?.text,
        color: ribbon?.color,
        size: ribbon?.size
      }
    } as BannerProps
  })
}
