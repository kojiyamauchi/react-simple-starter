/*
  Secondary Page.
*/

import { useLocation } from 'react-router-dom'

import { Layout } from '@/components/Layouts'
import { PageHeading } from '@/components/Presentations/PageHeading'
import { SEO } from '@/components/Seo/'

export const SecondaryPage: React.FC = (): JSX.Element => {
  const location = useLocation()

  return (
    <Layout pages="secondary" chooseLayout="fixedLayout">
      <SEO title="Secondary Page" description="This is Secondary Page" locationPath={location.pathname} />
      <PageHeading letter="Secondary" translation={true} className="secondary-page page-heading" />
    </Layout>
  )
}
