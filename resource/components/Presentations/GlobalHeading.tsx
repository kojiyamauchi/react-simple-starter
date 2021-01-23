/*
  Global Heading.
*/
import styled from 'styled-components'
import { BreakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const GlobalHeadingComponent: React.VFC<Props> = ({ className }): JSX.Element => (
  <div className={className}>
    <h1 className="primary-heading">React Simple Starter</h1>
  </div>
)

const StyledComponent = styled(GlobalHeadingComponent)`
  width: 100%;
  margin: 0 0 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .primary-heading {
    font-size: 3em;
    font-weight: 300;
    text-align: center;
    ${BreakPoint.largeMobile` font-size: 5.6em `}
  }
`

export const GlobalHeading = StyledComponent
