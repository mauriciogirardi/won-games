import { BannerProps } from '@/components/banner/Banner'
import { baseUrl } from '../..'
import { IMAGE_DEFAULT } from '../../constants'
import { AttributesBanner } from '../../types/home'

export function transformeDataBanners(banners: AttributesBanner[]) {
  return banners.map(({ attributes }) => {
    const { button, image, ribbon, subtitle, title } = attributes

    return {
      title,
      subtitle,
      buttonLabel: button.label,
      buttonLink: button.link,
      img: `${baseUrl}${image.data.attributes.url}` || IMAGE_DEFAULT,
      ribbon: {
        name: ribbon?.text,
        color: ribbon?.color,
        size: ribbon?.size
      }
    } as BannerProps
  })
}
