'use client'

import { Heading } from '../heading/Heading'
import * as S from './TextContent.styles'
import DOMPurify from 'dompurify'

export type TextContentProps = {
  title?: string
  content: string
}

export function TextContent({ content, title }: TextContentProps) {
  const sanitizedContent = DOMPurify.sanitize(content)

  return (
    <S.TextContentContainer>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </S.TextContentContainer>
  )
}
