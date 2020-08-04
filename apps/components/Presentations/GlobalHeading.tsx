/*
  GlobalHeading.
*/
import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const GlobalHeadingComponent: React.FC<Props> = (props): JSX.Element => (
  <div className={props.className}>
    <h1>React Simple Starter Kit</h1>
  </div>
)

const StyledComponent = styled(GlobalHeadingComponent)`
  width: 100%;
  margin: 0 0 40px 0;
  ${styleMixins.FlexCenter};

  h1 {
    font-size: 3em;
    font-weight: 300;
    ${styleMixins.breakPoint.largeMobile` font-size: 5.6em `}
  }
`

export const GlobalHeading = StyledComponent
