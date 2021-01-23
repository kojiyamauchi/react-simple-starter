/*
  Fourth Page.
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

const FourthPageComponent: React.VFC<Props> = ({ className }): JSX.Element => {
  const location = useLocation()

  return (
    <Layout pages="fourth" fixedLayout={true}>
      <SEO title="Fourth Page" description="This is Fourth Page" locationPath={location.pathname} />
      <div className={className}>
        <PageHeading letter="Fourth" className="fourth-page page-heading" />
      </div>
    </Layout>
  )
}

const StyledComponent = styled(FourthPageComponent)`
  ${PagesStyle}
`

export const FourthPage = StyledComponent
