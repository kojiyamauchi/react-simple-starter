/*
  Navigation Component Storybook.
*/

import { Navigation } from './Component'
import { BrowserRouter } from 'react-router-dom'
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
