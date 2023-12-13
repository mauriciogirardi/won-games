import { ItemSidebarProps } from '@/components/explore-sidebar/ExploreSidebar'
import { CHECKBOX, RADIO } from '.'

const filterPrice: ItemSidebarProps = {
  title: 'Price',
  name: 'price',
  type: RADIO,
  fields: [
    { label: 'Under $300', name: '300' },
    { label: 'Under $250', name: '250' },
    { label: 'Under $150', name: '150' },
    { label: 'Under $100', name: '100' },
    { label: 'Under $50', name: '50' },
    { label: 'Free', name: '0' }
  ]
}

const filterPlatforms: ItemSidebarProps = {
  title: 'Platforms',
  name: 'platforms',
  type: CHECKBOX,
  fields: [
    { label: 'Windows', name: 'windows' },
    { label: 'Linux', name: 'linux' },
    { label: 'Mac', name: 'osx' }
  ]
}

const filterSort: ItemSidebarProps = {
  title: 'Sort by price',
  name: 'sort',
  type: RADIO,
  fields: [
    { label: 'Lowest to highest', name: 'price:asc' },
    { label: 'Highest to lowest', name: 'price:desc' }
  ]
}

const filterCategories: ItemSidebarProps = {
  title: 'Genres',
  name: 'categories',
  type: CHECKBOX,
  fields: [
    { label: 'Simulation', name: 'simulation' },
    { label: 'Adventure', name: 'adventure' },
    { label: 'Platform', name: 'platform' },
    { label: 'Strategy', name: 'strategy' },
    { label: 'Fantasy', name: 'fantasy' },
    { label: 'Shooter', name: 'shooter' },
    { label: 'Action', name: 'action' },
    { label: 'Sports', name: 'sports' },
    { label: 'Puzzle', name: 'puzzle' },
    { label: 'Horror', name: 'horror' },
    { label: 'JRPG', name: 'jrpg' },
    { label: 'RPG', name: 'role-playing' }
  ]
}

export const filterItems: ItemSidebarProps[] = [
  filterSort,
  filterPrice,
  filterPlatforms,
  filterCategories
]
