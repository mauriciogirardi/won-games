import { PATH_HOME } from '@/constants/paths'
import { Button } from '@/components/button'

import * as S from './empty.styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
  src?: 'empty' | 'not-found'
}

export function Empty({
  description,
  title,
  hasLink = false,
  src = 'empty'
}: EmptyProps) {
  return (
    <S.EmptyContainer>
      <S.StyledImage
        src={`/img/${src}.svg`}
        alt="A gamer on a couch playing videogame"
        width={300}
        height={300}
        role="image"
      />

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      {hasLink && (
        <S.StyledLink href={PATH_HOME}>
          <Button as="span">Go back to store</Button>
        </S.StyledLink>
      )}
    </S.EmptyContainer>
  )
}
