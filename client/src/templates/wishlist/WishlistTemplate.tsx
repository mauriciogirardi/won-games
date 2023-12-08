'use client'

import { ResponseRecommended } from '@/lib/strapi/types/recommended'
import { BaseTemplate } from '../base-template/BaseTemplate'
import { Container } from '@/components/container/Container'
import { Showcase } from '@/components/showcase/Showcase'
import { GameCard, GameCardProps } from '@/components/game-card/GameCard'
import { Heading } from '@/components/heading/Heading'
import { Divider } from '@/components/divider/Divider'
import { Empty } from '@/components/empty/Empty'
import { Grid } from '@/components/grid/Grid'

export type WishlistTemplateProps = {
  recommended: ResponseRecommended
  wishlist?: GameCardProps[]
}

export function WishlistTemplate({
  recommended,
  wishlist
}: WishlistTemplateProps) {
  const hasWishlist = wishlist && wishlist.length > 0

  return (
    <BaseTemplate>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Wishlist
        </Heading>

        {hasWishlist ? (
          <Grid>
            {wishlist.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here."
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={recommended.title}
        games={recommended.games}
        highlight={recommended.highlight}
      />
    </BaseTemplate>
  )
}
