/*
  App.
*/

import * as React from 'react'
import Header from '@/components/Managements/Header'
import Router from '@/router/Router'
import Footer from '@/components/Presentations/Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 0 20px;
`

const App: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Header />
      <Router />
      <Footer />
    </Wrapper>
  )
}

export default App
