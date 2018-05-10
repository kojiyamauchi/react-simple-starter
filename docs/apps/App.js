/*
  App.
*/

// Import React.
import React from 'react'

// Import Components.
import Header from '@/apps/components/header/Header'
import Routes from '@/apps/routes/Routes'
import Footer from '@/apps/components/footer/Footer'

// / Import Styled Components.
import styled from 'styled-components'

// Import Style Variables.
import * as style from '@/styles/Variables'

// Add Styles.
const AppWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 0 20px;
`

// Component.
export default () => (
  <AppWrap>
    <Header />
    <Routes />
    <Footer />
  </AppWrap>
)
