'use client'

import Link from 'next/link'
import * as S from './pagination.styles'
import { ELLIPSIS_LEFT, ELLIPSIS_RIGHT, usePagination } from './usePagination'

export type PaginationProps = {
  page: number
  pageSize: number
  total: number
  query?: {
    [key: string]: string | string[] | boolean
  }
}

export function Pagination({ page, pageSize, total, query }: PaginationProps) {
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
                <Link
                  href={{
                    href: '/games',
                    query: {
                      page,
                      pageSize,
                      ...query
                    }
                  }}
                >
                  {page}
                </Link>
              )}
            </S.Li>
          )
        })}
      </S.Ul>
    </S.PaginationContainer>
  )
}
