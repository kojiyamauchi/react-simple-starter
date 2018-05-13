/*
  Header.
*/

// Import React.
import React from 'react'

// Import Component.
import HeadingsGlobal from '@/components/headings/HeadingsGlobal'
import Navigation from '@/components/navigation/Navigation'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Mixins.
import * as styleMixins from '@/styles/StyleMixins'

// Import Style Variables.
import * as styleVariables from '@/styles/StyleVariables'

// Add Styles.
const Header = styled.div`
  width: 100%;
  flex-direction: column;
  ${styleMixins.FlexCenter}
`

// Component.
export default () => (
  <Header>
    <HeadingsGlobal />
    <Navigation />
  </Header>
)
