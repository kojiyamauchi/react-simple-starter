/*
  Header.
*/

import React from 'react'
import { Link } from 'react-router-dom'
import { GlobalHeading } from '@/components/Presentations/GlobalHeading'
import { Navigation } from '@/components/Presentations/Navigation'
import styled from 'styled-components'
import { FlexCenter } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const HeaderComponent: React.FC<Props> = ({ className }): JSX.Element => {
  const nav = [
    { path: '/', letter: 'Top Page', id: 1 },
    { path: '/second', letter: 'Second Page', id: 2 },
    { path: '/third', letter: 'Third Page', id: 3 },
    { path: '/other', letter: 'Other Page', id: 4 }
  ]

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
    <div className={className}>
      <GlobalHeading />
      <Navigation pagenavigation={setList()} />
    </div>
  )
}

const StyledComponent = styled(HeaderComponent)`
  width: 100%;
  flex-direction: column;
  ${FlexCenter};
`

export const Header = StyledComponent
