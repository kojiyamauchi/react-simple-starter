/*
  Header.
*/

// Import React.
import React from 'react'

// Import Component.
import HeadingsGlobal from '@/apps/components/headings/HeadingsGlobal'
import Navigation from '@/apps/components/navigation/Navigation'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Variables.
import * as style from '@/styles/Variables'

// Add Styles.
const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// Component.
export default () => (
  <Header>
    <HeadingsGlobal />
    <Navigation />
  </Header>
)
