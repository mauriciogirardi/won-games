'use client'

import { ErrorTemplate } from '@/templates/error/error-template'

export default function Error({ reset }: { reset: () => void }) {
  return <ErrorTemplate reset={reset} />
}
