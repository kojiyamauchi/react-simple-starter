/*
  Header Container Component Storybook.
*/

import { HeaderContainer } from './Component'
import { BrowserRouter } from 'react-router-dom'
// import { action } from '@storybook/addon-actions'

const storiesInfo = {
  title: 'Header Container Component',
  component: HeaderContainer
}

export default storiesInfo

export const Default = (): JSX.Element => {
  return (
    <BrowserRouter>
      <HeaderContainer />
    </BrowserRouter>
  )
}
