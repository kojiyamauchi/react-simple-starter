/*
  Secondary Page.
*/

import { useLocation } from 'react-router-dom'
import { Layout } from '@/components/Layout/'
import { SEO } from '@/components/Seo/'
import { PageHeading } from '@/components/Presentations/PageHeading'

export const SecondaryPage: React.VFC = (): JSX.Element => {
  const location = useLocation()

  return (
    <Layout pages="secondary" chooseLayout="fixedLayout">
      <SEO title="Secondary Page" description="This is Secondary Page" locationPath={location.pathname} />
      <main>
        <PageHeading letter="Secondary" className="secondary-page page-heading" />
      </main>
    </Layout>
  )
}
