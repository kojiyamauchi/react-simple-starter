/*
  Headings Global.
*/

// Import React.
import React from 'react'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Mixins.
import * as styleMixins from '@/styles/StyleMixins'

// Import Style Variables.
import * as styleVariables from '@/styles/StyleVariables'

// Add Styles.
const HeadingsGlobalWrap = styled.div`
  width: 100%;
  margin: 0 0 40px 0;
  ${styleMixins.FlexCenter}
  h1 {
    font-size: 3.5rem;
    font-weight: 300;
  }
`

// Component.
export default () => (
  <HeadingsGlobalWrap>
    <h1>React SPA Starter Kit</h1>
  </HeadingsGlobalWrap>
)
