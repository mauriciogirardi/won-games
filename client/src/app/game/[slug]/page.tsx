import { notFound } from 'next/navigation'

import { getGame, getGames } from '@/lib/strapi/fetchers/games'
import { GameDetailsProps } from '@/components/game-details'
import { getDataUpcoming } from '@/lib/strapi/fetchers/upcoming'
import { getRecommended } from '@/lib/strapi/fetchers/recommended'
import { GameInfoProps } from '@/components/game-info'
import { GameTemplate } from '@/templates/game/game-template'

type Params = {
  params: {
    slug: string
  }
}
type GameProps = {
  params: Params['params']
}

export async function generateStaticParams() {
  const { games } = await getGames()
  return games?.map(({ slug }) => ({ slug }))
}

export default async function Game({ params }: GameProps) {
  const { slug } = params

  const fetchGame = getGame(slug)
  const fetchRecommended = getRecommended()
  const fetchUpcoming = getDataUpcoming()

  const [game, recommended, upcoming] = await Promise.all([
    fetchGame,
    fetchRecommended,
    fetchUpcoming
  ])

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
      content={content}
      recommended={recommended}
      upcoming={upcoming}
    />
  )
}
