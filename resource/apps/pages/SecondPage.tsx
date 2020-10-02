/*
  SecondPage.
*/

import React from 'react'
import { PageHeading } from '@/components/Presentations/PageHeading'
import Logo from '@/materials/images/logo.png'
import styled from 'styled-components'
import { PagesStyle } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const SecondPageComponent: React.FC<Props> = ({ className }): JSX.Element => (
  <div className={className}>
    <PageHeading letter="Second" className="secondary-page page-heading" />
  </div>
)

const StyledComponent = styled(SecondPageComponent)`
  ${PagesStyle}
  background-image: url(${Logo});
`

export const SecondPage = StyledComponent
