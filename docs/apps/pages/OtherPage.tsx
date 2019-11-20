/*
  Other Page.
*/

import * as React from 'react'
import styled from 'styled-components'
import HeadingsPage from '@/components/headings/HeadingsPage'
import Logo4 from '@/materials/images/logo4'
import * as styleMixins from '@/styles/StyleMixins'

const Main = styled.div`
  ${styleMixins.pagesStyle}
  background-image: url(${Logo4});
`

const OtherPage: React.FC = (): JSX.Element => {
  return (
    <Main>
      <HeadingsPage letter="Other" />
    </Main>
  )
}

export default OtherPage
