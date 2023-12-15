'use client'

import { renderPlatformIcons } from '@/utils/render-platform-icons'
import { Heading } from '../heading'
import { MediaMatch } from '../media-match'
import * as S from './game-details.styles'
import { formattedDate } from '@/utils/formatted-date'
import { getRatingColor, renderRating } from '@/utils/render-rating'

export type Platform = 'windows' | 'linux' | 'mac'
export type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  platforms: Platform[]
  developer: string
  releaseDate: string | null
  rating: Rating | null
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
  const formattedRating = rating ? renderRating(rating) : 0
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

        {releaseDate && (
          <S.Block>
            <S.Label>Release Date</S.Label>
            <S.Description>{formattedDate(releaseDate)}</S.Description>
          </S.Block>
        )}

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
