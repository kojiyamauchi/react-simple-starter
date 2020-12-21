/*
  OtherPage.
*/

import { PageHeading } from '@/components/Presentations/PageHeading'
import Logo from '@/materials/images/logo.png'
import styled from 'styled-components'
import { PagesStyle } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const OtherPageComponent: React.VFC<Props> = ({ className }): JSX.Element => (
  <div className={className}>
    <PageHeading letter="Other" className="fourth-page page-heading" />
  </div>
)

const StyledComponent = styled(OtherPageComponent)`
  ${PagesStyle}
  background-image: url(${Logo});
`

export const OtherPage = StyledComponent
