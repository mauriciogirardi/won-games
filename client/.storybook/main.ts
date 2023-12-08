import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: [
    '../src/components/**/*.stories.tsx',
    '../src/styles/**/*.stories.tsx'
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
      builder: {
        useSWC: true // Enables SWC support
      }
    }
  },
  docs: {
    autodocs: true
  },
  webpackFinal: (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`)
    config.resolve = {
      ...config.resolve,
      alias: {
        '@': path.resolve(__dirname, '../src')
      }
    }

    return config
  }
}
export default config
