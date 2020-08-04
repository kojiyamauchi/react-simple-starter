/*
  OtherPage.
*/

import * as React from 'react'
import { PageHeading } from '@/components/Presentations/PageHeading'
import Logo from '@/materials/images/logo.png'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const OtherPageComponent: React.FC<Props> = (props): JSX.Element => (
  <div className={props.className}>
    <PageHeading letter="Other" className="fourth-page page-heading" />
  </div>
)

const StyledComponent = styled(OtherPageComponent)`
  ${styleMixins.pagesStyle}
  background-image: url(${Logo});
`

export const OtherPage = StyledComponent
