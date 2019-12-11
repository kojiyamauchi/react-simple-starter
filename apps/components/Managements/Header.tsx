/*
  Header.
*/

import * as React from 'react'
import { Link } from 'react-router-dom'
import GlobalHeading from '@/components/Presentations/GlobalHeading'
import Navigation from '@/components/Presentations/Navigation'
import styledComponents from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

const { useState } = React

const Wrapper = styledComponents.div`
  width: 100%;
  flex-direction: column;
  ${styleMixins.FlexCenter};
`

const Header: React.FC = (): JSX.Element => {
  const [nav] = useState([
    { path: '/', letter: 'Top Page', id: 1 },
    { path: '/second', letter: 'Second Page', id: 2 },
    { path: '/third', letter: 'Third Page', id: 3 },
    { path: '/other', letter: 'Other Page', id: 4 }
  ])

  const setList = (): JSX.Element[] => {
    return nav.map(
      (info): JSX.Element => (
        <Link key={info.id} to={`${info.path}`}>
          {info.letter}
        </Link>
      )
    )
  }

  return (
    <Wrapper>
      <GlobalHeading />
      <Navigation pagenavigation={setList()} />
    </Wrapper>
  )
}

export default Header
