/*
  Second Page.
*/

// Import React.
import React from 'react'

// Import Component.
import HeadingsSecond from '@/components/headings/HeadingsSecond'

// Import Logo2.
import Logo2 from '@/materials/images/logo2'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Mixins.
import * as styleMixins from '@/styles/StyleMixins'

// Import Style Variables.
import * as styleVariables from '@/styles/StyleVariables'

// Add Styles.
const Main = styled.div`
  ${styleMixins.pagesStyle}
  background-image: url(${Logo2});
`

// Component.
export default () => (
  <Main>
    <HeadingsSecond />
  </Main>
)
