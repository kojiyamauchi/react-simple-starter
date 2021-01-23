/*
  Layout.
*/

import { HeaderContainer } from '@/components/Managements/HeaderContainer'
import { Footer } from '@/components/Presentations/Footer'
import styled from 'styled-components'

type Props = {
  className?: string
  pages: string
  fixedLayout: boolean
}

const LayoutComponent: React.FC<Props> = ({ className, pages, fixedLayout, children }): JSX.Element => {
  return fixedLayout ? (
    <div className={`${className} ${pages} layout fixed-layout`}>
      <HeaderContainer />
      {children}
      <Footer />
    </div>
  ) : (
    <div className={`${className} ${pages} layout fluid-layout`}>{children}</div>
  )
}

const StyledComponent = styled(LayoutComponent)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`

export const Layout = StyledComponent
