/*
  Header Container.
*/

import { GlobalHeading } from '@/components/Presentations/GlobalHeading'
import { Navigation } from '@/components/Presentations/Navigation'
import styled from 'styled-components'

type Props = {
  className?: string
}

const HeaderContainerComponent: React.VFC<Props> = ({ className }): JSX.Element => {
  return (
    <header className={className}>
      <GlobalHeading />
      <Navigation />
    </header>
  )
}

const StyledComponent = styled(HeaderContainerComponent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0 0;
`

export const HeaderContainer = StyledComponent
