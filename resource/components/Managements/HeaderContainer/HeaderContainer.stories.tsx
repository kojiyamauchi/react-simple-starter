/*
  Header Container Component Storybook.
*/

import { HeaderContainer } from './'
import { BrowserRouter } from 'react-router-dom'
// import { action } from '@storybook/addon-actions'

export default {
  title: 'Header Container Component',
  component: HeaderContainer
}

export const Default = (): JSX.Element => {
  return (
    <BrowserRouter>
      <HeaderContainer />
    </BrowserRouter>
  )
}
