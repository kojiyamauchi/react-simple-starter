/*
  GlobalHeading.
*/
import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

const Wrapper = styled.div`
  width: 100%;
  margin: 0 0 40px 0;
  ${styleMixins.FlexCenter};

  h1 {
    font-size: 3em;
    font-weight: 300;
    ${styleMixins.breakPoint.largeMobile` font-size: 5.6em `}
  }
`

const GlobalHeading: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <h1>React Simple Starter Kit</h1>
    </Wrapper>
  )
}

export default GlobalHeading
