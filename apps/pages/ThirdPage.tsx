/*
  ThirdPage.
*/

import React from 'react'
import { PageHeading } from '@/components/Presentations/PageHeading'
import Logo from '@/materials/images/logo.png'
import styled from 'styled-components'
import { pagesStyle } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const ThirdPageComponent: React.FC<Props> = ({ className }): JSX.Element => (
  <div className={className}>
    <PageHeading letter="Third" className="third-page page-heading" />
  </div>
)

const StyledComponent = styled(ThirdPageComponent)`
  ${pagesStyle}
  background-image: url(${Logo});
`

export const ThirdPage = StyledComponent
