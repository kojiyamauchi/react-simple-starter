/*
  Router.
*/

import { Route, Switch } from 'react-router-dom'
import { PrimaryPage } from '@/pages/PrimaryPage'
import { SecondaryPage } from '@/pages/SecondaryPage'
import { ThirdPage } from '@/pages/ThirdPage'
import { FourthPage } from '@/pages/FourthPage'
import { pathPrefix } from '~/base.config'

const RouterComponent: React.VFC = (): JSX.Element => (
  <Switch>
    <Route exact path={`${pathPrefix()}/`} component={PrimaryPage} />
    <Route exact path={`${pathPrefix()}/second`} component={SecondaryPage} />
    <Route exact path={`${pathPrefix()}/third`} component={ThirdPage} />
    <Route exact path={`${pathPrefix()}/fourth`} component={FourthPage} />
  </Switch>
)

export const Router = RouterComponent
