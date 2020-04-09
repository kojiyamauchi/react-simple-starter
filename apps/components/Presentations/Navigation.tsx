/*
  Navigation.
*/

import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

const List = styled.div`
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

type Props = {
  pagenavigation: JSX.Element[]
}

const Navigation: React.FC<Props> = (props): JSX.Element => {
  return <List>{props.pagenavigation}</List>
}

export default Navigation
