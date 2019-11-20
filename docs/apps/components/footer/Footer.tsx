/*
  Footer.
*/

import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

const FooterWrap = styled.div`
  width: 100%;
  ${styleMixins.FlexCenter};

  a {
    font-family: Lobster, cursive;
    font-size: 1.5em;
    cursor: pointer;
  }
`

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterWrap>
      <a href="http://kojiyamauchi.com">© All The Small Things, All Rights Reserved.</a>
    </FooterWrap>
  )
}

export default Footer
