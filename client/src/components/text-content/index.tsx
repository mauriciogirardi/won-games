import { Heading } from '../heading'
import * as S from './text-content.styles'

export type TextContentProps = {
  title?: string
  content: string
}

export function TextContent({ content, title }: TextContentProps) {
  return (
    <S.TextContentContainer>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </S.TextContentContainer>
  )
}
