/*
  Navigation.
*/

import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

const { useState } = React

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

const Navigation: React.FC = (): JSX.Element => {
  const [nav] = useState([
    { path: '/', letter: 'Top Page', id: 1 },
    { path: '/second', letter: 'Second Page', id: 2 },
    { path: '/third', letter: 'Third Page', id: 3 },
    { path: '/third/other', letter: 'Other Page', id: 4 }
  ])

  const setList = (): JSX.Element[] => {
    return nav.map(info => (
      <Link key={info.id} to={`${info.path}`}>
        {info.letter}
      </Link>
    ))
  }

  return (
    <NavigationWrap>
      <ul>{setList()}</ul>
    </NavigationWrap>
  )
}

export default Navigation
