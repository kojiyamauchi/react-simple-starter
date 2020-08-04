/*
  TopPage.
*/

import * as React from 'react'
import { PageHeading } from '@/components/Presentations/PageHeading'
import Logo from '@/materials/images/logo.png'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const TopPageComponent: React.FC<Props> = (props): JSX.Element => (
  <div className={props.className}>
    <PageHeading letter="Top" className="primary-page page-heading" />
  </div>
)

const StyledComponent = styled(TopPageComponent)`
  ${styleMixins.pagesStyle}
  background-image: url(${Logo});
`

export const TopPage = StyledComponent
