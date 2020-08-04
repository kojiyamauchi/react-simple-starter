/*
  Footer.
*/

import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const FooterComponent: React.FC<Props> = (props): JSX.Element => (
  <div className={props.className}>
    <a href="http://kojiyamauchi.com">© All The Small Things, All Rights Reserved.</a>
  </div>
)

const StyledComponent = styled(FooterComponent)`
  width: 100%;
  ${styleMixins.FlexCenter};

  a {
    font-family: Lobster, cursive;
    font-size: 1.5em;
    cursor: pointer;
    ${styleMixins.breakPoint.largeMobile` font-size: 2.4em `}
  }
`

export const Footer = StyledComponent
