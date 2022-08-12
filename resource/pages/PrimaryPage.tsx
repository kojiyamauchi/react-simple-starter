/*
  Primary Page.
*/

import { useLocation } from 'react-router-dom'

import { Layout } from '@/components/Layouts'
import { PageHeading } from '@/components/Presentations/PageHeading'
import { SEO } from '@/components/Seo/'

export const PrimaryPage: React.FC = (): JSX.Element => {
  const location = useLocation()

  return (
    <Layout pages="primary" chooseLayout="fixedLayout">
      <SEO locationPath={location.pathname} />
      <PageHeading letter="Primary" translation={true} className="primary-page page-heading" />
    </Layout>
  )
}
