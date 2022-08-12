/*
  Fourth Page.
*/

import { useLocation } from 'react-router-dom'

import { Layout } from '@/components/Layouts'
import { PageHeading } from '@/components/Presentations/PageHeading'
import { SEO } from '@/components/Seo/'

export const FourthPage: React.FC = (): JSX.Element => {
  const location = useLocation()

  return (
    <Layout pages="fourth" chooseLayout="fixedLayout">
      <SEO title="Fourth Page" description="This is Fourth Page" locationPath={location.pathname} />
      <PageHeading letter="Fourth" translation={true} className="fourth-page page-heading" />
    </Layout>
  )
}
