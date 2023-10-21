export function formattedDate(date: string) {
  return new Intl.DateTimeFormat('en-us', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(date))
}
