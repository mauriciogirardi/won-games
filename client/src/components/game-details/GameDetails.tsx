'use client'

import { renderPlatformIcons } from '@/utils/renderPlatformIcons'
import { Heading } from '../heading/Heading'
import { MediaMatch } from '../media-match/MediaMatch'
import * as S from './GameDetails.styles'
import { formattedDate } from '@/utils/formattedDate'
import { getRatingColor, renderRating } from '@/utils/renderRating'

export type Platform = 'windows' | 'linux' | 'mac'
export type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  platforms: Platform[]
  developer: string
  releaseDate: string
  rating: Rating
  genres: string[]
  publisher: string
}

export function GameDetails({
  platforms,
  developer,
  releaseDate,
  rating,
  genres,
  publisher
}: GameDetailsProps) {
  const formattedRating = renderRating(rating)
  const getRatingInNumber =
    formattedRating === 'FREE' ? 0 : (formattedRating as number)
  const colorRating = getRatingColor(getRatingInNumber)

  return (
    <S.GameDetailsContainer>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary" color="white">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>{formattedDate(releaseDate)}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconWrapper>
            {platforms?.map((icon) => (
              <S.Icon key={icon}>{renderPlatformIcons[icon]}</S.Icon>
            ))}
          </S.IconWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Rating color={colorRating}>
            <S.Description>{formattedRating}</S.Description>
          </S.Rating>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.GameDetailsContainer>
  )
}
