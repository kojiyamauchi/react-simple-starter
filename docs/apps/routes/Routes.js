/*
  Routes.
*/

// Import React.
import React from 'react'

// Import BrowserRouter of React Router DOM.
import { Route, Switch } from 'react-router-dom'

// Import Components.
import TopPage from '@/apps/pages/TopPage'
import SecondPage from '@/apps/pages/SecondPage'
import ThirdPage from '@/apps/pages/ThirdPage'
import OtherPage from '@/apps/pages/OtherPage'

// Component.
export default () => (
  <Switch>
    <Route exact path="/react-spa-starter-kit/" component={TopPage} />
    <Route exact path="/react-spa-starter-kit/second" component={SecondPage} />
    <Route exact path="/react-spa-starter-kit/third" component={ThirdPage} />
    <Route exact path="/react-spa-starter-kit/third/other" component={OtherPage} />
  </Switch>
)
