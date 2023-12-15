'use client'

import { ResponseRecommended } from '@/lib/strapi/types/recommended'
import { BaseTemplate } from '../base/base-template'
import { Container } from '@/components/container'
import { Showcase } from '@/components/showcase'
import { GameCard, GameCardProps } from '@/components/game-card'
import { Heading } from '@/components/heading'
import { Divider } from '@/components/divider'
import { Empty } from '@/components/empty'
import { Grid } from '@/components/grid'

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
