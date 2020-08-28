/*
  TopPage.
*/

import React from 'react'
import { PageHeading } from '@/components/Presentations/PageHeading'
import Logo from '@/materials/images/logo.png'
import styled from 'styled-components'
import { pagesStyle } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const TopPageComponent: React.FC<Props> = ({ className }): JSX.Element => (
  <div className={className}>
    <PageHeading letter="Top" className="primary-page page-heading" />
  </div>
)

const StyledComponent = styled(TopPageComponent)`
  ${pagesStyle}
  background-image: url(${Logo});
`

export const TopPage = StyledComponent
