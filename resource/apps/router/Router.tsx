/*
  Router.
*/

import { Route, Switch } from 'react-router-dom'
import { TopPage } from '@/pages/TopPage'
import { SecondPage } from '@/pages/SecondPage'
import { ThirdPage } from '@/pages/ThirdPage'
import { OtherPage } from '@/pages/OtherPage'

const RouterComponent: React.FC = (): JSX.Element => (
  <Switch>
    <Route exact path="/react-simple-starter/" component={TopPage} />
    <Route exact path="/react-simple-starter/second" component={SecondPage} />
    <Route exact path="/react-simple-starter/third" component={ThirdPage} />
    <Route exact path="/react-simple-starter/other" component={OtherPage} />
  </Switch>
)

export const Router = RouterComponent
