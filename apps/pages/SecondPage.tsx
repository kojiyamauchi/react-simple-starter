/*
  SecondPage.
*/

import * as React from 'react'
import PageHeading from '@/components/Presentations/PageHeading'
import Logo from '@/materials/images/logo.png'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

const Main = styled.div`
  ${styleMixins.pagesStyle}
  background-image: url(${Logo});
`

const SecondPage: React.FC = (): JSX.Element => {
  return (
    <Main>
      <PageHeading letter="Second" className="secondary-page page-heading" />
    </Main>
  )
}

export default SecondPage
