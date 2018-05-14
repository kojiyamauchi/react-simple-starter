/*
  Navigation.
*/

// Import React.
import React, { Component } from 'react'

// Import Link on React Router DOM.
import { Link } from 'react-router-dom'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Variables.
import * as styleVariables from '@/styles/StyleVariables'

// Add Styles.
const NavigationWrap = styled.div`
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
class Navigation extends Component {
  constructor(props){
    super(props)

    this.state = {
      nav: [
        { path: '/react-spa-starter-kit/', letter: 'Top Page' } ,
        { path: '/react-spa-starter-kit/second',letter: 'Second Page' } ,
        { path: '/react-spa-starter-kit/third', letter: 'Third Page' } ,
        { path: '/react-spa-starter-kit/third/other', letter: 'Other Page' } ,
      ]
    }

  }

  render() {
    return (
      <NavigationWrap>
        <ul>
        {this.state.nav.map((nav, i) => {
          return <Link key={i} to={`${nav.path}`}>{nav.letter}</Link>
        })}
        </ul>
      </NavigationWrap>
    )
  }
}

export default Navigation
