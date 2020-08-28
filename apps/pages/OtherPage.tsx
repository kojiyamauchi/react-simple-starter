/*
  OtherPage.
*/

import React from 'react'
import { PageHeading } from '@/components/Presentations/PageHeading'
import Logo from '@/materials/images/logo.png'
import styled from 'styled-components'
import { pagesStyle } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const OtherPageComponent: React.FC<Props> = ({ className }): JSX.Element => (
  <div className={className}>
    <PageHeading letter="Other" className="fourth-page page-heading" />
  </div>
)

const StyledComponent = styled(OtherPageComponent)`
  ${pagesStyle}
  background-image: url(${Logo});
`

export const OtherPage = StyledComponent
