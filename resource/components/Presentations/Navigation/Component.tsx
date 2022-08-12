/*
  Navigation Component.
*/

import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { breakPoint } from '@/styles/StyleMixins'
import { pathPrefix } from '~/base.config'

type Props = {
  className?: string
}

const link = [
  { path: `${pathPrefix}/`, letter: 'Primary Page', id: 1 },
  { path: `${pathPrefix}/second`, letter: 'Secondary Page', id: 2 },
  { path: `${pathPrefix}/third`, letter: 'Third Page', id: 3 },
  { path: `${pathPrefix}/fourth`, letter: 'Fourth Page', id: 4 }
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

const NavigationComponent: React.FC<Props> = ({ className }): JSX.Element => <ul className={className}>{navigation()}</ul>

const StyledComponent = styled(NavigationComponent)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  ${breakPoint.aboveLargeMobile` width: 60%; `}
  ${breakPoint.aboveLargeMobile` padding: 0; `}

  .link-letter {
    font-size: 1.375em;
    font-weight: 300;
    text-align: center;
    ${breakPoint.aboveLargeMobile` font-size: 2.2em `}
  }
`

export const Navigation = StyledComponent
