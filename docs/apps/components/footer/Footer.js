/*
  Footer.
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
const FooterWrap = styled.div`
  width: 100%;
  ${styleMixins.FlexCenter}
  a {
    font-family: Lobster, cursive;
    font-size: 1.5em;
    cursor: pointer;
  }
`

// Component.
export default () => (
  <FooterWrap>
    <a href="http://kojiyamauchi.com">
      © All The Small Things, All Rights Reserved.
    </a>
  </FooterWrap>
)
