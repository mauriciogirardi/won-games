import { notFound } from 'next/navigation'

import { useGames } from '@/hooks/useGames'
import { useHighlight } from '@/hooks/useHighlight'
import { GameTemplate } from '@/templates/game/GameTemplate'

import { getGame, getGames } from '@/lib/strapi/fetchers/games'
import { GameInfoProps } from '@/components/game-info/GameInfo'
import { GameDetailsProps } from '@/components/game-details/GameDetails'

type Params = {
  params: {
    slug: string
  }
}
type GameProps = {
  params: Params['params']
}

export async function generateStaticParams() {
  const games = await getGames()
  return games?.map(({ slug }) => ({ slug }))
}

export default async function Game({ params }: GameProps) {
  const { slug } = params

  const game = await getGame(slug)
  const { games } = useGames()
  const { highlight } = useHighlight()

  if (!slug || !game) {
    return notFound()
  }

  const {
    categories,
    content,
    developer,
    gallery,
    img,
    platforms,
    price,
    publisher,
    rating,
    releaseDate,
    shortDescription,
    title
  } = game

  const gameInfo: GameInfoProps = {
    title,
    price,
    description: shortDescription
  }

  const gameDetails: GameDetailsProps = {
    rating,
    developer,
    platforms,
    publisher,
    releaseDate,
    genres: categories
  }

  return (
    <GameTemplate
      cover={img}
      gallery={gallery}
      gameDetails={gameDetails}
      gameInfo={gameInfo}
      games={games}
      highlight={highlight}
      content={content}
    />
  )
}
