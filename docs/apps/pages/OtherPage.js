/*
  Other Page.
*/

// Import React.
import React from 'react'

// Import Component.
import HeadingsPage from '@/components/headings/HeadingsPage'

// Import Logo4.
import Logo4 from '@/materials/images/logo4'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Mixins.
import * as styleMixins from '@/styles/StyleMixins'

// Import Style Variables.
import * as styleVariables from '@/styles/StyleVariables'

// Add Styles.
const Main = styled.div`
  ${styleMixins.pagesStyle}
  background-image: url(${Logo4});
`

// Component.
export default () => (
  <Main>
    <HeadingsPage letter="Other" />
  </Main>
)
