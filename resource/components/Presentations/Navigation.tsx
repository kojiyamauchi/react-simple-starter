/*
  Navigation.
*/

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BreakPoint } from '@/styles/StyleMixins'
import { pathPrefix } from '~/base.config'

type Props = {
  className?: string
}

const NavigationComponent: React.VFC<Props> = ({ className }): JSX.Element => {
  const link = [
    { path: `${pathPrefix()}/`, letter: 'Primary Page', id: 1 },
    { path: `${pathPrefix()}/second`, letter: 'Secondary Page', id: 2 },
    { path: `${pathPrefix()}/third`, letter: 'Third Page', id: 3 },
    { path: `${pathPrefix()}/fourth`, letter: 'Fourth Page', id: 4 }
  ]

  const navigation = (): JSX.Element[] => {
    return link.map(
      (info): JSX.Element => (
        <li key={info.id}>
          <Link to={`${info.path}`} className="link-letter">
            {info.letter}
          </Link>
        </li>
      )
    )
  }

  return <ul className={className}>{navigation()}</ul>
}

const StyledComponent = styled(NavigationComponent)`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${BreakPoint.largeMobile` width: 60%; `}
  ${BreakPoint.largeMobile` padding: 0; `}

  .link-letter {
    font-size: 1.375em;
    font-weight: 300;
    text-align: center;
    ${BreakPoint.largeMobile` font-size: 2.2em `}
  }
`

export const Navigation = StyledComponent
