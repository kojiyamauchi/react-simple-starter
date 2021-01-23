/*
  Primary Page.
*/

import { useLocation } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { SEO } from '@/components/Seo'
import { PageHeading } from '@/components/Presentations/PageHeading'
import styled from 'styled-components'
import { PagesStyle } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const PrimaryPageComponent: React.VFC<Props> = ({ className }): JSX.Element => {
  const location = useLocation()

  return (
    <Layout pages="primary" fixedLayout={true}>
      <SEO locationPath={location.pathname} />
      <div className={className}>
        <PageHeading letter="Primary" className="primary-page page-heading" />
      </div>
    </Layout>
  )
}

const StyledComponent = styled(PrimaryPageComponent)`
  ${PagesStyle}
`

export const PrimaryPage = StyledComponent
