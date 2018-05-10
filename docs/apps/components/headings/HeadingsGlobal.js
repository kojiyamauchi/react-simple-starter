/*
  Headings Global.
*/

// Import React.
import React from 'react'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Variables.
import * as style from '@/styles/Variables'

// Add Styles.
const HeadingsGlobalWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 40px 0;
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
