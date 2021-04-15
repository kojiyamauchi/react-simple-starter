/*
  Fixed Layout.
*/

import { HeaderContainer } from '@/components/Managements/HeaderContainer'
import { Footer } from '@/components/Presentations/Footer'
import styled from 'styled-components'

type Props = {
  className?: string
  pages: string
}

const FixedLayoutComponent: React.FC<Props> = ({ className, pages, children }): JSX.Element => {
  return (
    <div className={`${className} ${pages} layout fixed-layout`}>
      <HeaderContainer />
      {children}
      <Footer />
    </div>
  )
}

const StyledComponent = styled(FixedLayoutComponent)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`

export const FixedLayout = StyledComponent
