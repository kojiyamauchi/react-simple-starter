/*
  Navigation.
*/

import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

type Props = {
  pagenavigation: JSX.Element[]
  className?: string
}

const NavigationComponent: React.FC<Props> = (props): JSX.Element => <div className={props.className}>{props.pagenavigation}</div>

const StyledComponent = styled(NavigationComponent)`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  ${styleMixins.FlexHorizontalBetween}
  ${styleMixins.breakPoint.largeMobile` width: 60%; `}
  ${styleMixins.breakPoint.largeMobile` padding: 0; `}

  a {
    font-size: 1.375em;
    font-weight: 300;
    ${styleMixins.breakPoint.largeMobile` font-size: 2.2em `}
  }
`

export const Navigation = StyledComponent
