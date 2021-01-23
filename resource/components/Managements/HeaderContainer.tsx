/*
  Header Container.
*/

import { Link } from 'react-router-dom'
import { GlobalHeading } from '@/components/Presentations/GlobalHeading'
import { Navigation } from '@/components/Presentations/Navigation'
import styled from 'styled-components'
import { BreakPoint } from '@/styles/StyleMixins'
import { pathPrefix } from '~/base.config'

type Props = {
  className?: string
}

const HeaderContainerComponent: React.VFC<Props> = ({ className }): JSX.Element => {
  const nav = [
    { path: `${pathPrefix()}/`, letter: 'Primary Page', id: 1 },
    { path: `${pathPrefix()}/second`, letter: 'Secondary Page', id: 2 },
    { path: `${pathPrefix()}/third`, letter: 'Third Page', id: 3 },
    { path: `${pathPrefix()}/fourth`, letter: 'Fourth Page', id: 4 }
  ]

  const setList = (): JSX.Element[] => {
    return nav.map(
      (info): JSX.Element => (
        <Link key={info.id} to={`${info.path}`} className="link-letter">
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
  padding: 50px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .link-letter {
    font-size: 1.375em;
    font-weight: 300;
    text-align: center;
    ${BreakPoint.largeMobile` font-size: 2.2em `}
  }
`

export const HeaderContainer = StyledComponent
