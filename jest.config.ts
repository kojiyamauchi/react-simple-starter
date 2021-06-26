import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/resource/$1',
    '^~/(.+)': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '\\.(webp|svg|png|jpg|jpeg|gif)$': '<rootDir>/jestFileTransformer.js'
  },
  setupFilesAfterEnv: ['<rootDir>/testingLibrary.config.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    },
    webpackEnvMode: 'test'
  },
  testMatch: [
    '**/resource/tests/**/*.test.+(ts|tsx|js|jsx)',
    '**/resource/components/**/*.test.+(ts|tsx|js|jsx)',
    '**/resource/hooks/**/*.test.+(ts|tsx|js|jsx)',
    '**/resource/ducks/**/*.test.+(ts|tsx|js|jsx)'
  ]
}

export default config
