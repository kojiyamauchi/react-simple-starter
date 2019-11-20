/*
  App.
*/

import * as React from 'react'
import Header from '@/components/header/Header'
import Router from '@/router/Router'
import Footer from '@/components/footer/Footer'
import styled from 'styled-components'

const AppWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 0 20px;
`

const App: React.FC = (): JSX.Element => {
  return (
    <AppWrap>
      <Header />
      <Router />
      <Footer />
    </AppWrap>
  )
}

export default App
