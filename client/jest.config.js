module.exports = {
  testEnvironment: 'jsdom',
  prettierPath: null,
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**',
    '!src/styles/**',
    '!src/components/**/*.stories.tsx',
    '!src/lib/registry.tsx',
    '!src/@types/**',
    '!src/utils/**',
    '!src/hooks/**',
    '!src/env.ts',
    '!src/lib/strapi/**/*.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js',
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}
