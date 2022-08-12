/*
  Third Page.
*/

import { useLocation } from 'react-router-dom'

import { Layout } from '@/components/Layouts'
import { PageHeading } from '@/components/Presentations/PageHeading'
import { SEO } from '@/components/Seo/'

export const ThirdPage: React.FC = (): JSX.Element => {
  const location = useLocation()

  return (
    <Layout pages="third" chooseLayout="fixedLayout">
      <SEO title="Third Page" description="This is Third Page" locationPath={location.pathname} />
      <PageHeading letter="Third" translation={true} className="third-page page-heading" />
    </Layout>
  )
}
