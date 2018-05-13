/*
  Third Page.
*/

// Import React.
import React from 'react'

// Import Component.
import HeadingsThird from '@/components/headings/HeadingsThird'

// Import Logo3.
import Logo3 from '@/materials/images/logo3'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Mixins.
import * as styleMixins from '@/styles/StyleMixins'

// Import Style Variables.
import * as styleVariables from '@/styles/StyleVariables'

// Add Styles.
const Main = styled.div`
  ${styleMixins.pagesStyle}
  background-image: url(${Logo3});
`

// Component.
export default () => (
  <Main>
    <HeadingsThird />
  </Main>
)
