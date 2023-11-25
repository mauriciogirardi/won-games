'use client'

import { BaseTemplate } from '../base-template/BaseTemplate'
import { Empty } from '@/components/empty/Empty'
import * as S from './NotFoundTemplate.styles'

export default function NotFoundTemplate() {
  return (
    <BaseTemplate>
      <S.NotFoundContainer>
        <Empty
          title="Page not found"
          description="Ops...this page does not exist. Go back to the store and enjoy our offers."
          hasLink
          src="not-found"
        />
      </S.NotFoundContainer>
    </BaseTemplate>
  )
}
