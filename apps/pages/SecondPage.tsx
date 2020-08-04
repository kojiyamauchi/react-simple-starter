/*
  SecondPage.
*/

import * as React from 'react'
import { PageHeading } from '@/components/Presentations/PageHeading'
import Logo from '@/materials/images/logo.png'
import styled from 'styled-components'
import * as styleMixins from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const SecondPageComponent: React.FC<Props> = (props): JSX.Element => (
  <div className={props.className}>
    <PageHeading letter="Second" className="secondary-page page-heading" />
  </div>
)

const StyledComponent = styled(SecondPageComponent)`
  ${styleMixins.pagesStyle}
  background-image: url(${Logo});
`

export const SecondPage = StyledComponent
