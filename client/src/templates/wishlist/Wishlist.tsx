'use client'

import { Container } from '@/components/container/Container'
import { BaseTemplate } from '../base-template/BaseTemplate'
import { Heading } from '@/components/heading/Heading'
import { Showcase } from '@/components/showcase/Showcase'
import { items } from '@/components/game-card-slider/mock'
import { initialProps } from '@/components/highlight/mocks'
import { GameCard } from '@/components/game-card/GameCard'
import { Grid } from '@/components/grid/Grid'
import { Divider } from '@/components/divider/Divider'
import { Empty } from '@/components/empty/Empty'

export function WishlistTemplate() {
  const hasWishlist = items.length > 0

  return (
    <BaseTemplate>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          Wishlist
        </Heading>

        {hasWishlist && (
          <Grid>
            {items.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </Grid>
        )}

        {!hasWishlist && (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here."
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        games={items}
        highlight={initialProps}
      />
    </BaseTemplate>
  )
}
