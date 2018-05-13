/*
  Headings Second.
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
const HeadingsSecondWrap = styled.div`
  ${styleMixins.Heading02}
`

// Component.
export default () => (
  <HeadingsSecondWrap>
    <h2>This is Second Page.</h2>
  </HeadingsSecondWrap>
)
