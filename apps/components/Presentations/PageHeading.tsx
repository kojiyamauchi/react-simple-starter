/*
  PagesHeading.
*/

import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

type Props = {
  letter: string
  className?: string
}

const PageHeadingComponent: React.FC<Props> = (props): JSX.Element => (
  <div className={props.className}>
    <h2 className={props.className}>This is {props.letter} Page.</h2>
  </div>
)

const StyledComponent = styled(PageHeadingComponent)`
  ${styleMixins.HeadingsPage};
`

export const PageHeading = StyledComponent
