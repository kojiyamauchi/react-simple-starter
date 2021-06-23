/*
  Fluid Layout Component Storybook.
*/

import { FluidLayout } from './'
import { BrowserRouter } from 'react-router-dom'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Fluid Layout Component',
  component: FluidLayout
}

export default storiesInfo

export const Default = (): JSX.Element => (
  <BrowserRouter>
    <FluidLayout pages="storybook" />
  </BrowserRouter>
)
