/*
  Primary Page.
*/

import { useLocation } from 'react-router-dom'
import { Layout } from '@/components/Layout/'
import { SEO } from '@/components/Seo/'
import { PageHeading } from '@/components/Presentations/PageHeading'

export const PrimaryPage: React.VFC = (): JSX.Element => {
  const location = useLocation()

  return (
    <Layout pages="primary" chooseLayout="fixedLayout">
      <SEO locationPath={location.pathname} />
      <main>
        <PageHeading letter="Primary" className="primary-page page-heading" />
      </main>
    </Layout>
  )
}
