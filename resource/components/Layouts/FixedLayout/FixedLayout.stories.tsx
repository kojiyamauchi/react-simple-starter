/*
  Fixed Layout Component Storybook.
*/

import { FixedLayout } from './'
import { BrowserRouter } from 'react-router-dom'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Fixed Layout Component',
  component: FixedLayout
}

export const Default = (): JSX.Element => {
  return (
    <BrowserRouter>
      <FixedLayout pages="storybook" />
    </BrowserRouter>
  )
}
