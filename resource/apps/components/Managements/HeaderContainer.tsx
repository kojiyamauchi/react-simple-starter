/*
  Header Container.
*/

import { Link } from 'react-router-dom'
import { GlobalHeading } from '@/components/Presentations/GlobalHeading'
import { Navigation } from '@/components/Presentations/Navigation'
import styled from 'styled-components'
import { FlexCenter } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const HeaderContainerComponent: React.FC<Props> = ({ className }): JSX.Element => {
  const nav = [
    { path: '/react-simple-starter/', letter: 'Top Page', id: 1 },
    { path: '/react-simple-starter/second', letter: 'Second Page', id: 2 },
    { path: '/react-simple-starter/third', letter: 'Third Page', id: 3 },
    { path: '/react-simple-starter/other', letter: 'Other Page', id: 4 }
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

const StyledComponent = styled(HeaderContainerComponent)`
  width: 100%;
  flex-direction: column;
  ${FlexCenter};
`

export const HeaderContainer = StyledComponent
