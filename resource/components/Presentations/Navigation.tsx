/*
  Navigation.
*/

import styled from 'styled-components'
import { BreakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
  pagenavigation: JSX.Element[]
}

const NavigationComponent: React.VFC<Props> = ({ className, pagenavigation }): JSX.Element => <div className={className}>{pagenavigation}</div>

const StyledComponent = styled(NavigationComponent)`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${BreakPoint.largeMobile` width: 60%; `}
  ${BreakPoint.largeMobile` padding: 0; `}
`

export const Navigation = StyledComponent
