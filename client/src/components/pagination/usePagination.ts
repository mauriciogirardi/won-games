type UsePaginationProps = {
  total: number
  page: number
  pageSize: number
}

export const ELLIPSIS_RIGHT = -1
export const ELLIPSIS_LEFT = -2

function generatePages(page: number, pageSize: number) {
  const current = Math.min(page, pageSize)
  const total = Math.max(1, pageSize)

  if (total <= 7) {
    return Array.from({ length: total }).map((_, index) => index + 1)
  }

  if (current < 3) {
    return [1, 2, 3, ELLIPSIS_LEFT, total - 1, total]
  }

  if (current === 3) {
    return [1, 2, 3, 4, ELLIPSIS_LEFT, total - 1, total]
  }

  if (current > total - 2) {
    return [1, 2, ELLIPSIS_RIGHT, total - 2, total - 1, total]
  }

  if (current === total - 2) {
    return [1, 2, ELLIPSIS_RIGHT, total - 3, total - 2, total - 1, total]
  }

  return [
    1,
    ELLIPSIS_LEFT,
    current - 1,
    current,
    current + 1,
    ELLIPSIS_RIGHT,
    total
  ]
}

export function usePagination({ page, pageSize, total }: UsePaginationProps) {
  const totalPages = Math.ceil(total / pageSize)
  const pages = generatePages(page, totalPages)
  const isCurrentPage = (currentPage: number) => currentPage === page

  return {
    isCurrentPage,
    pages
  }
}
