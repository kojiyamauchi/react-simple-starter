/*
  Top Page.
*/

// Import React.
import React from 'react'

// Import Component.
import HeadingsTop from '@/components/headings/HeadingsTop'

// Import Logo1.
import Logo1 from '@/materials/images/logo1'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Mixins.
import * as styleMixins from '@/styles/StyleMixins'

// Import Style Variables.
import * as styleVariables from '@/styles/StyleVariables'

// Add Styles.
const Main = styled.div`
  ${styleMixins.pagesStyle}
  background-image: url(${Logo1});
`

// Component.
export default () => (
  <Main>
    <HeadingsTop />
  </Main>
)
