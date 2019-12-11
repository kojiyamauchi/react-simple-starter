/*
  PagesHeading.
*/

import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

interface Props {
  letter: string
  className?: string
}

const Wrapper = styled.div`
  ${styleMixins.HeadingsPage};
`

const PageHeading: React.FC<Props> = (props): JSX.Element => {
  return (
    <Wrapper>
      <h2 className={props.className}>This is {props.letter} Page.</h2>
    </Wrapper>
  )
}

export default PageHeading
