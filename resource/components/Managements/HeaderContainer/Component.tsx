/*
  Header Container Component.
*/

import styled from 'styled-components'

import { GlobalHeading } from '@/components/Presentations/GlobalHeading'
import { Navigation } from '@/components/Presentations/Navigation'

type Props = {
  className?: string
}

const HeaderContainerComponent: React.FC<Props> = ({ className }): JSX.Element => {
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
`

export const HeaderContainer = StyledComponent
