/*
  Top Page.
*/

// Import React.
import React from 'react'

// Import Component.
import HeadingsTop from '@/apps/components/headings/HeadingsTop'

// Import Logo1.
import Logo1 from '@/apps/images/logo1'

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
  background-image: url(${Logo1});
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
