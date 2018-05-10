/*
  Headings Top.
*/

// Import React.
import React from 'react'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Variables.
import * as style from '@/styles/Variables'

// Add Styles.
const HeadingsTopWrap = styled.div`
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
  <HeadingsTopWrap>
    <h2>This is Top Page.</h2>
  </HeadingsTopWrap>
)
