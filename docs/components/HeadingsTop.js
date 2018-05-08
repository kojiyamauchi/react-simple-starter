/*
  Headings Top.
*/

// Import React & Component.
import React, { Component } from 'react'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Variables.
import * as style from '@/styles/Variables'

// Add Styles.
const HeadingsTopWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3rem;
    font-weight: 300;
    transform: translateY(-50%);
  }
`

// Core.
export class HeadingsTop extends Component {

  // Render.
  render() {
    return (
      <HeadingsTopWrap>
      <h1>Let’s Begin Now!!!</h1>
      </HeadingsTopWrap>
    )
  }

}
