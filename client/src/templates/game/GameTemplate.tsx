'use client'

import {
  GameDetails,
  GameDetailsProps
} from '@/components/game-details/GameDetails'
import { GameInfo, GameInfoProps } from '@/components/game-info/GameInfo'
import { Gallery, GalleryImage } from '@/components/gallery/Gallery'
import { ResponseRecommended } from '@/lib/strapi/types/recommended'
import { ResponseUpcoming } from '@/lib/strapi/types/upcoming'
import { BaseTemplate } from '../base-template/BaseTemplate'
import { TextContent } from '@/components/text-content/TextContent'
import { Showcase } from '@/components/showcase/Showcase'
import { Divider } from '@/components/divider/Divider'

import * as S from './GameTemplate.styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImage[]
  content: string
  gameDetails: GameDetailsProps
  recommended: ResponseRecommended
  upcoming: ResponseUpcoming
}

export function GameTemplate({
  cover,
  gallery,
  gameInfo,
  content,
  gameDetails,
  recommended,
  upcoming
}: GameTemplateProps) {
  return (
    <BaseTemplate>
      <S.Cover src={cover} role="image" aria-label="cover" />

      <S.SectionGameInfo>
        <S.Main>
          <GameInfo {...gameInfo} />
        </S.Main>
      </S.SectionGameInfo>

      {!!gallery && (
        <S.SectionGallery>
          <Gallery items={gallery} />
        </S.SectionGallery>
      )}

      <S.SectionDescription>
        <TextContent title="Description" content={content} />
      </S.SectionDescription>

      <S.SectionDetails>
        <GameDetails {...gameDetails} />
        <Divider />
      </S.SectionDetails>

      <Showcase
        title={upcoming.title}
        games={upcoming.games}
        highlight={upcoming.highlight}
      />

      <Showcase title={recommended.title} games={recommended.games} mt="5rem" />
    </BaseTemplate>
  )
}
