/*
  Third Page.
*/

import { useLocation } from 'react-router-dom'
import { Layout } from '@/components/Layout/'
import { SEO } from '@/components/Seo/'
import { PageHeading } from '@/components/Presentations/PageHeading'
import styled from 'styled-components'
import { PagesStyle } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const ThirdPageComponent: React.VFC<Props> = ({ className }): JSX.Element => {
  const location = useLocation()

  return (
    <Layout pages="third" chooseLayout="fixedLayout">
      <SEO title="Third Page" description="This is Third Page" locationPath={location.pathname} />
      <div className={className}>
        <PageHeading letter="Third" className="third-page page-heading" />
      </div>
    </Layout>
  )
}

const StyledComponent = styled(ThirdPageComponent)`
  ${PagesStyle}
`

export const ThirdPage = StyledComponent
