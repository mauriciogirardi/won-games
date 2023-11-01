'use client'

import { Gallery, GalleryImage } from '@/components/gallery/Gallery'
import { GameInfo, GameInfoProps } from '@/components/game-info/GameInfo'
import {
  GameDetails,
  GameDetailsProps
} from '@/components/game-details/GameDetails'
import { TextContent } from '@/components/text-content/TextContent'
import { BaseTemplate } from '../base-template/BaseTemplate'

import * as S from './Game.styles'
import { Showcase } from '@/components/showcase/Showcase'
import { GameCardProps } from '@/components/game-card/GameCard'
import { HighlightProps } from '@/components/highlight/Highlight'
import { Divider } from '@/components/divider/Divider'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImage[]
  content: string
  gameDetails: GameDetailsProps
  games: GameCardProps[]
  highlight: HighlightProps
}

export function GameTemplate({
  cover,
  gallery,
  gameInfo,
  content,
  gameDetails,
  games,
  highlight
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

      <Showcase title="Upcoming" games={games} highlight={highlight} />

      <Showcase title="You may like these games" games={games} mt="5rem" />
    </BaseTemplate>
  )
}
