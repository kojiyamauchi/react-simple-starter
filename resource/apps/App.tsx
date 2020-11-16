/*
  App.
*/

import { HeaderContainer } from '@/components/Managements/HeaderContainer'
import { Router } from '@/router/Router'
import { Footer } from '@/components/Presentations/Footer'
import styled from 'styled-components'

type Props = {
  className?: string
}

const AppComponent: React.FC<Props> = ({ className }): JSX.Element => (
  <div className={className}>
    <HeaderContainer />
    <Router />
    <Footer />
  </div>
)

const StyledComponent = styled(AppComponent)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`

export const App = StyledComponent
