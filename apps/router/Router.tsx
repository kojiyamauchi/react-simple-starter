/*
  Router.
*/

import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import TopPage from '@/pages/TopPage'
import SecondPage from '@/pages/SecondPage'
import ThirdPage from '@/pages/ThirdPage'
import OtherPage from '@/pages/OtherPage'

const Router: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={TopPage} />
      <Route exact path="/second" component={SecondPage} />
      <Route exact path="/third" component={ThirdPage} />
      <Route exact path="/other" component={OtherPage} />
    </Switch>
  )
}

export default Router
