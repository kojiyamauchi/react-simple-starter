/*
  Top Page.
*/

import * as React from 'react'
import HeadingsPage from '@/components/headings/HeadingsPage'
import Logo1 from '@/materials/images/logo1'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

const Main = styled.div`
  ${styleMixins.pagesStyle}
  background-image: url(${Logo1});
`

const TopPage: React.FC = (): JSX.Element => {
  return (
    <Main>
      <HeadingsPage letter="Top" className="heading" />
    </Main>
  )
}

export default TopPage
