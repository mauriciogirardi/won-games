import { themes } from '@/styles/themes';

type Theme = typeof themes

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
