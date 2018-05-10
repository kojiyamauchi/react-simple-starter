/*
  Top Page.
*/

// Import React.
import React from 'react'

// Import Component.
import HeadingsTop from '@/apps/components/headings/HeadingsTop'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Variables.
import * as style from '@/styles/Variables'

// Add Styles.
const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-image: url(../react-spa-starter-kit/images/logo1.svg);
  background-repeat: no-repeat;
  background-size: 25% auto;
  background-position: 80% center;
`

// Component.
export default () => (
  <Main>
    <HeadingsTop />
  </Main>
)
