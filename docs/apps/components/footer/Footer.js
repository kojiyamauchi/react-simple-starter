/*
  Footer.
*/

// Import React.
import React from 'react'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Variables.
import * as style from '@/styles/Variables'

// Add Styles.
const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-family: Lobster, cursive;
    font-size: 1.5em;
    cursor: pointer;
  }
`

// Component.
export default () => (
  <Footer>
    <a href="http://kojiyamauchi.com">
      © All The Small Things, All Rights Reserved.
    </a>
  </Footer>
)
