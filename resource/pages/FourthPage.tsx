/*
  Fourth Page.
*/

import { useLocation } from 'react-router-dom'
import { Layout } from '@/components/Layouts'
import { SEO } from '@/components/Seo/'
import { PageHeading } from '@/components/Presentations/PageHeading'

export const FourthPage: React.VFC = (): JSX.Element => {
  const location = useLocation()

  return (
    <Layout pages="fourth" chooseLayout="fixedLayout">
      <SEO title="Fourth Page" description="This is Fourth Page" locationPath={location.pathname} />
      <PageHeading letter="Fourth" translation={true} className="fourth-page page-heading" />
    </Layout>
  )
}
