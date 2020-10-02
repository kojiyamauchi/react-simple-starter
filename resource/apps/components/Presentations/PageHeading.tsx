/*
  PagesHeading.
*/

import React from 'react'
import styled from 'styled-components'
import { HeadingsPage } from '@/styles/StyleMixins'

type Props = {
  className?: string
  letter: string
}

const PageHeadingComponent: React.FC<Props> = ({ className, letter }): JSX.Element => (
  <div className={className}>
    <h2 className={className}>This is {letter} Page.</h2>
  </div>
)

const StyledComponent = styled(PageHeadingComponent)`
  ${HeadingsPage};
`

export const PageHeading = StyledComponent
