/*
  Navigation.
*/

// Import React.
import React from 'react'

import { Link } from 'react-router-dom'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Variables.
import * as style from '@/styles/Variables'

// Add Styles.
const Navigation = styled.div`
  width: 100%;
  ul {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    font-size: 1.375rem;
    font-weight: 300;
  }
`

// Component.
export default () => (
    <Navigation>
      <ul>
        <li>
          <Link to="/react-spa-starter-kit/">Top Page</Link>
        </li>
        <li>
          <Link to="/react-spa-starter-kit/second">Second Page</Link>
        </li>
        <li>
          <Link to="/react-spa-starter-kit/third">Third Page</Link>
        </li>
        <li>
          <Link to="/react-spa-starter-kit/third/other">Other Page</Link>
        </li>
      </ul>
    </Navigation>
)
