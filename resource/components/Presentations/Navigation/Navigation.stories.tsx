/*
  Navigation Component Storybook.
*/

import { Navigation } from './'
import { BrowserRouter } from 'react-router-dom'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Navigation Component',
  component: Navigation
}

export const Default = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  )
}
