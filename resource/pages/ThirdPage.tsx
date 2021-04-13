/*
  Third Page.
*/

import { useLocation } from 'react-router-dom'
import { Layout } from '@/components/Layout/'
import { SEO } from '@/components/Seo/'
import { PageHeading } from '@/components/Presentations/PageHeading'

export const ThirdPage: React.VFC = (): JSX.Element => {
  const location = useLocation()

  return (
    <Layout pages="third" chooseLayout="fixedLayout">
      <SEO title="Third Page" description="This is Third Page" locationPath={location.pathname} />
      <main>
        <PageHeading letter="Third" className="third-page page-heading" />
      </main>
    </Layout>
  )
}
