/*
  Headings Top.
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
const HeadingsTopWrap = styled.div`
  ${styleMixins.Heading02}
`

// Component.
export default () => (
  <HeadingsTopWrap>
    <h2>This is Top Page.</h2>
  </HeadingsTopWrap>
)
