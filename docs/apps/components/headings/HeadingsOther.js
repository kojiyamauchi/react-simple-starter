/*
  Headings Other.
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
const HeadingsOtherWrap = styled.div`
  ${styleMixins.Heading02}
`

// Component.
export default () => (
  <HeadingsOtherWrap>
    <h2>This is Other Page.</h2>
  </HeadingsOtherWrap>
)
