/*
  Fixed Layout.
*/

import styled from 'styled-components'

import { HeaderContainer } from '@/components/Managements/HeaderContainer'
import { Footer } from '@/components/Presentations/Footer'
import Logo from '@/materials/images/logo.webp'

type Props = {
  className?: string
  pages: string
  children?: React.ReactNode
}

const FixedLayoutComponent: React.FC<Props> = ({ className, pages, children }): JSX.Element => {
  return (
    <div className={`${className} ${pages} layout fixed-layout`}>
      <HeaderContainer />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  )
}

const StyledComponent = styled(FixedLayoutComponent)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 50px 0 20px;

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }

  .main-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: 80% center;
    background-size: 25% auto;
  }
`

export const FixedLayout = StyledComponent
