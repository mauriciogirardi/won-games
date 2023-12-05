export function formatCurrency(value: number) {
  if (value === 0) {
    return 'FREE'
  }

  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}
