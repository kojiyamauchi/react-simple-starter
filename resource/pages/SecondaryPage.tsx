/*
  Secondary Page.
*/

import { useLocation } from 'react-router-dom'
import { Layout } from '@/components/Layouts'
import { SEO } from '@/components/Seo/'
import { PageHeading } from '@/components/Presentations/PageHeading'

export const SecondaryPage: React.VFC = (): JSX.Element => {
  const location = useLocation()

  return (
    <Layout pages="secondary" chooseLayout="fixedLayout">
      <SEO title="Secondary Page" description="This is Secondary Page" locationPath={location.pathname} />
      <PageHeading letter="Secondary" translation={true} className="secondary-page page-heading" />
    </Layout>
  )
}
