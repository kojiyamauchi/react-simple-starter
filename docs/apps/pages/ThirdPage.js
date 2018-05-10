/*
  Third Page.
*/

// Import React.
import React from 'react'

// Import Component.
import HeadingsThird from '@/apps/components/headings/HeadingsThird'

// Import Logo3.
import Logo3 from '@/images/logo3'

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
  background-image: url(${Logo3});
  background-repeat: no-repeat;
  background-size: 25% auto;
  background-position: 80% center;
`

// Component.
export default () => (
  <Main>
    <HeadingsThird />
  </Main>
)
