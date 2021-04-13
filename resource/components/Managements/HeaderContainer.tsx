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
  width: 100%;
  flex-direction: column;
  padding: 50px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderContainer = StyledComponent
