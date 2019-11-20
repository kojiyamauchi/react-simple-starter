/*
  Second Page.
*/

import * as React from 'react'
import HeadingsPage from '@/components/headings/HeadingsPage'
import Logo2 from '@/materials/images/logo2'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

const Main = styled.div`
  ${styleMixins.pagesStyle}
  background-image: url(${Logo2});
`

const SecondPage: React.FC = (): JSX.Element => {
  return (
    <Main>
      <HeadingsPage letter="Second" />
    </Main>
  )
}

export default SecondPage
