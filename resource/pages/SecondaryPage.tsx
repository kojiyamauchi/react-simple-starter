/*
  Secondary Page.
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

const SecondaryPageComponent: React.VFC<Props> = ({ className }): JSX.Element => {
  const location = useLocation()

  return (
    <Layout pages="secondary" fixedLayout={true}>
      <SEO title="Secondary Page" description="This is Secondary Page" locationPath={location.pathname} />
      <div className={className}>
        <PageHeading letter="Secondary" className="secondary-page page-heading" />
      </div>
    </Layout>
  )
}

const StyledComponent = styled(SecondaryPageComponent)`
  ${PagesStyle}
`

export const SecondaryPage = StyledComponent
