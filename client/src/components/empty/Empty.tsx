import Link from 'next/link'
import * as S from './Empty.styles'
import { PATH_HOME } from '@/constants/paths'
import { Button } from '../button/Button'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

export function Empty({ description, title, hasLink = false }: EmptyProps) {
  return (
    <S.EmptyContainer>
      <S.StyledImage
        src="/img/empty.svg"
        alt="A gamer on a couch playing videogame"
        width={300}
        height={300}
        role="image"
      />

      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      {hasLink && (
        <Link href={PATH_HOME} passHref>
          <Button as="span">Go back to store</Button>
        </Link>
      )}
    </S.EmptyContainer>
  )
}
