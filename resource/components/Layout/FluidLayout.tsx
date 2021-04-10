/*
  Fluid Layout.
*/
import styled from 'styled-components'

type Props = {
  className?: string
  pages: string
}

const FluidLayoutComponent: React.FC<Props> = ({ className, pages, children }): JSX.Element => {
  return <div className={`${className} ${pages} layout fluid-layout`}>{children}</div>
}

const StyledComponent = styled(FluidLayoutComponent)``

export const FluidLayout = StyledComponent
