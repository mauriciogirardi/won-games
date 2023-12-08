'use client'

import Link from 'next/link'
import * as S from './pagination.styles'
import { ELLIPSIS_LEFT, ELLIPSIS_RIGHT, usePagination } from './usePagination'

export type PaginationProps = {
  page: number
  pageSize: number
  total: number
}

export function Pagination({ page, pageSize, total }: PaginationProps) {
  const { isCurrentPage, pages } = usePagination({ page, pageSize, total })

  return (
    <S.PaginationContainer>
      <S.Ul>
        {pages.map((page) => {
          const isEllipsis = [ELLIPSIS_LEFT, ELLIPSIS_RIGHT].includes(page)
          return (
            <S.Li
              key={page}
              isNotPage={isEllipsis}
              isCurrentPage={isCurrentPage(page)}
            >
              {isEllipsis ? (
                '...'
              ) : (
                <Link href={`?page=${page}&pageSize=${pageSize}`}>{page}</Link>
              )}
            </S.Li>
          )
        })}
      </S.Ul>
    </S.PaginationContainer>
  )
}
