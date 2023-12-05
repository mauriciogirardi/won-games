export type AtributesBanner = {
  attributes: {
    title: string
    subtitle: string
    image: {
      data: {
        attributes: {
          url: string
          alt: string
        }
      }
    }

    button: {
      label: string
      link: string
    }
    ribbon: {
      text: string
      color: 'primary' | 'secondary'
      size: 'normal' | 'size'
    } | null
  }
}

export type BannersGraphQLResponse = {
  data: {
    banners: {
      data: AtributesBanner[]
    }
  }
}
