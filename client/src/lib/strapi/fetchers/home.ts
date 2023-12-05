import { BannerProps } from '@/components/banner/Banner'
import { baseUrl, strapiFetch } from '..'
import { getBannersQuery } from '../queries/banner'
import { AtributesBanner, BannersGraphQLResponse } from '../types/home'

function transformeDataBanners(banners: AtributesBanner[]) {
  return banners.map(({ attributes }) => {
    const { button, image, ribbon, subtitle, title } = attributes

    return {
      title,
      subtitle,
      buttonLabel: button.label,
      buttonLink: button.link,
      img: `${baseUrl}${image.data.attributes.url}`,
      ribbon: {
        name: ribbon?.text,
        color: ribbon?.color,
        size: ribbon?.size
      }
    } as BannerProps
  })
}

export async function getBanners() {
  const { body } = await strapiFetch<BannersGraphQLResponse>({
    query: getBannersQuery
  })

  const banners = body.data.banners.data

  return transformeDataBanners(banners)
}
