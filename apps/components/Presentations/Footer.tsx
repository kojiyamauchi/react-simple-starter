/*
  Footer.
*/

import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

const Wrapper = styled.div`
  width: 100%;
  ${styleMixins.FlexCenter};

  a {
    font-family: Lobster, cursive;
    font-size: 1.5em;
    cursor: pointer;
    ${styleMixins.breakPoint.largeMobile` font-size: 2.4em `}
  }
`

const Footer: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <a href="http://kojiyamauchi.com">© All The Small Things, All Rights Reserved.</a>
    </Wrapper>
  )
}

export default Footer
