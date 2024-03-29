/*
  Fixed Layout Component Storybook.
*/

import { BrowserRouter } from 'react-router-dom'

import { FixedLayout } from './'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Fixed Layout Component',
  component: FixedLayout
}

export default storiesInfo

export const Default = (): JSX.Element => {
  return (
    <BrowserRouter>
      <FixedLayout pages="storybook" />
    </BrowserRouter>
  )
}
