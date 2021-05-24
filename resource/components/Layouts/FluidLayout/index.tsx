/*
  Fluid Layout.
*/

import styled from 'styled-components'
import Logo from '@/materials/images/logo.webp'

type Props = {
  className?: string
  pages: string
}

const FluidLayoutComponent: React.FC<Props> = ({ className, pages, children }): JSX.Element => {
  return (
    <div className={`${className} ${pages} layout fluid-layout`}>
      <main className="main-content">{children}</main>
    </div>
  )
}

const StyledComponent = styled(FluidLayoutComponent)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

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

export const FluidLayout = StyledComponent
