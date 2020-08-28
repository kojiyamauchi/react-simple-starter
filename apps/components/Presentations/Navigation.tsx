/*
  Navigation.
*/

import React from 'react'
import styled from 'styled-components'
import { FlexHorizontalBetween, breakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
  pagenavigation: JSX.Element[]
}

const NavigationComponent: React.FC<Props> = ({ className, pagenavigation }): JSX.Element => <div className={className}>{pagenavigation}</div>

const StyledComponent = styled(NavigationComponent)`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  ${FlexHorizontalBetween}
  ${breakPoint.largeMobile` width: 60%; `}
  ${breakPoint.largeMobile` padding: 0; `}

  a {
    font-size: 1.375em;
    font-weight: 300;
    ${breakPoint.largeMobile` font-size: 2.2em `}
  }
`

export const Navigation = StyledComponent
