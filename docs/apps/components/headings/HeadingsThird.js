/*
  Headings Third.
*/

// Import React.
import React from 'react'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Variables.
import * as style from '@/styles/Variables'

// Add Styles.
const HeadingsThirdWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 3rem;
    font-weight: 300;
    transform: translateY(-100%);
  }
`

// Component.
export default () => (
  <HeadingsThirdWrap>
    <h2>This is Third Page.</h2>
  </HeadingsThirdWrap>
)