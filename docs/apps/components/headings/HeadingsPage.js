/*
  Pages Heading.
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
const HeadingsPageWrap = styled.div`
  ${styleMixins.HeadingsPage}
`

// Component.
export default (props) => (
  <HeadingsPageWrap>
    <h2>This is { props.letter } Page.</h2>
  </HeadingsPageWrap>
)
