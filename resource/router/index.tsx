/*
  Router.
*/

import { Route, Routes } from 'react-router-dom'
import { PrimaryPage } from '@/pages/PrimaryPage'
import { SecondaryPage } from '@/pages/SecondaryPage'
import { ThirdPage } from '@/pages/ThirdPage'
import { FourthPage } from '@/pages/FourthPage'
import { pathPrefix } from '~/base.config'

const RouterComponent: React.VFC = (): JSX.Element => (
  <Routes>
    <Route path={`${pathPrefix()}/`} element={<PrimaryPage />} />
    <Route path={`${pathPrefix()}/second`} element={<SecondaryPage />} />
    <Route path={`${pathPrefix()}/third`} element={<ThirdPage />} />
    <Route path={`${pathPrefix()}/fourth`} element={<FourthPage />} />
  </Routes>
)

export const Router = RouterComponent
