import { addDecorator } from '@storybook/react'
import { GlobalStyle } from '@/styles/StyleGlobal'
import { StorybookStyle } from '@/styles/StyleStorybook'

addDecorator((Story) => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Source+Sans+Pro:wght@300;400;700;900&display=swap"
      rel="stylesheet"
    />
    <GlobalStyle />
    <StorybookStyle />
    <Story />
  </>
))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
