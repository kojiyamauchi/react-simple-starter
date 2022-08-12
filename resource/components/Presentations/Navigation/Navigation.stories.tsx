/*
  Navigation Component Storybook.
*/

import { BrowserRouter } from 'react-router-dom'

import { Navigation } from './Component'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Navigation Component',
  component: Navigation
}

export default storiesInfo

export const Default = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  )
}
