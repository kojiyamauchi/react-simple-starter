/*
  Pages Heading.
*/

import * as React from 'react'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

const HeadingsPageWrap = styled.div`
  ${styleMixins.HeadingsPage};
`

const HeadingsPage: React.FC = props => {
  return (
    <HeadingsPageWrap>
      <h2>This is {props.letter} Page.</h2>
    </HeadingsPageWrap>
  )
}

export default HeadingsPage
