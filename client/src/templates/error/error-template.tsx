import { Container } from '@/components/container/Container'
import { BaseTemplate } from '../base-template/BaseTemplate'
import * as S from './error-template-styles'
import { Button } from '@/components/button/Button'
import { Empty } from '@/components/empty/Empty'

export function ErrorTemplate({ reset }: { reset: () => void }) {
  return (
    <BaseTemplate>
      <Container>
        <S.ErrorContainer>
          <Empty
            title="Something went wrong"
            description="There was an issue with our store. This could be a temporary issue,
            please try your action again."
          />

          <Button onClick={() => reset()}>Try again</Button>
        </S.ErrorContainer>
      </Container>
    </BaseTemplate>
  )
}
