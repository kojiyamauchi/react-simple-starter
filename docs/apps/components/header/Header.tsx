/*
  Header.
*/

import * as React from 'react'
import styledComponents from 'styled-components'
import HeadingsGlobal from '@/components/headings/HeadingsGlobal'
import Navigation from '@/components/navigation/Navigation'
import * as styleMixins from '@/styles/StyleMixins'

const HeaderWrap = styledComponents.div`
  width: 100%;
  flex-direction: column;
  ${styleMixins.FlexCenter};
`

const Header: React.FC = (): JSX.Element => {
  return (
    <HeaderWrap>
      <HeadingsGlobal />
      <Navigation />
    </HeaderWrap>
  )
}

export default Header
