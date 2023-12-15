import { Rating } from '@/components/game-details'

export const getRatingColor = (rate: number) => {
  if (rate === 0) return 'transparent'
  if (rate <= 12) return 'green'
  if (rate > 12 && rate < 18) return 'orange'
  return 'red'
}

export const renderRating = (age: Rating) => {
  return {
    BR0: 'FREE',
    BR10: 10,
    BR12: 12,
    BR14: 14,
    BR16: 16,
    BR18: 18
  }[age]
}
