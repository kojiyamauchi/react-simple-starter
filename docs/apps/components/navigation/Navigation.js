/*
  Navigation.
*/

// Import React.
import React, { Component } from 'react'

// Import Link on React Router DOM.
import { Link } from 'react-router-dom'

// Import Styled Components.
import styled from 'styled-components'

// Import Style Mixins.
import * as styleMixins from '@/styles/StyleMixins'

// Import Style Variables.
import * as styleVariables from '@/styles/StyleVariables'

// Add Styles.
const NavigationWrap = styled.div`
  width: 100%;
  padding: 0 20px;
  ${styleMixins.breakPoint.largeMobile` padding: 0;`}
  ul {
    width: 100%;
    margin: 0 auto;
    ${styleMixins.FlexHorizontalBetween}
    ${styleMixins.breakPoint.largeMobile` width: 60%;`}
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
        { path: '/react-spa-starter-kit/', letter: 'Top Page' },
        { path: '/react-spa-starter-kit/second',letter: 'Second Page' },
        { path: '/react-spa-starter-kit/third', letter: 'Third Page' },
        { path: '/react-spa-starter-kit/third/other', letter: 'Other Page' }
      ]
    }

  }

  navList() {
    return this.state.nav.map((nav,i) => {
      return <Link key={i} to={`${nav.path}`}>{ nav.letter }</Link>
    })
  }

  render() {
    return (
      <NavigationWrap>
        <ul>
        {this.navList()}
        </ul>
      </NavigationWrap>
    )
  }
}

export default Navigation
