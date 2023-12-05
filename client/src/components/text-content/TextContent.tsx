import { Heading } from '../heading/Heading'
import * as S from './TextContent.styles'

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
