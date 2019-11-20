/*
  Headings Global.
*/
import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

const HeadingsGlobalWrap = styled.div`
  width: 100%;
  margin: 0 0 40px 0;
  ${styleMixins.FlexCenter};

  h1 {
    font-size: 3.5rem;
    font-weight: 300;
  }
`

const HeadingGlobal: React.FC = (): JSX.Element => {
  return (
    <HeadingsGlobalWrap>
      <h1>React SPA Starter Kit</h1>
    </HeadingsGlobalWrap>
  )
}

export default HeadingGlobal
