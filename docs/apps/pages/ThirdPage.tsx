/*
  Third Page.
*/

import * as React from 'react'
import HeadingsPage from '@/components/headings/HeadingsPage'
import Logo3 from '@/materials/images/logo3'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

const Main = styled.div`
  ${styleMixins.pagesStyle}
  background-image: url(${Logo3});
`

const ThirdPage: React.FC = (): JSX.Element => {
  return (
    <Main>
      <HeadingsPage letter="Third" />
    </Main>
  )
}

export default ThirdPage
