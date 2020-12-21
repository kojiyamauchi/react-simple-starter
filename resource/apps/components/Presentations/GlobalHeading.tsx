/*
  GlobalHeading.
*/
import styled from 'styled-components'
import { FlexCenter, BreakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const GlobalHeadingComponent: React.VFC<Props> = ({ className }): JSX.Element => (
  <div className={className}>
    <h1>React Simple Starter Kit</h1>
  </div>
)

const StyledComponent = styled(GlobalHeadingComponent)`
  width: 100%;
  margin: 0 0 40px 0;
  ${FlexCenter};

  h1 {
    font-size: 3em;
    font-weight: 300;
    ${BreakPoint.largeMobile` font-size: 5.6em `}
  }
`

export const GlobalHeading = StyledComponent
