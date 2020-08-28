/*
  Footer.
*/

import React from 'react'
import styled from 'styled-components'
import { FlexCenter, breakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const FooterComponent: React.FC<Props> = ({ className }): JSX.Element => (
  <div className={className}>
    <a href="http://kojiyamauchi.com">© All The Small Things, All Rights Reserved.</a>
  </div>
)

const StyledComponent = styled(FooterComponent)`
  width: 100%;
  ${FlexCenter};

  a {
    font-family: Lobster, cursive;
    font-size: 1.5em;
    cursor: pointer;
    ${breakPoint.largeMobile` font-size: 2.4em `}
  }
`

export const Footer = StyledComponent
