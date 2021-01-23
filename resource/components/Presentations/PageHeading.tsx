/*
  Page Heading.
*/

import styled from 'styled-components'
import { BreakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
  letter: string
}

const PageHeadingComponent: React.VFC<Props> = ({ className, letter }): JSX.Element => (
  <div className={className}>
    <h2 className="secondary-heading">This is {letter} Page.</h2>
  </div>
)

const StyledComponent = styled(PageHeadingComponent)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .secondary-heading {
    font-size: 3em;
    text-align: center;
    transform: translateY(-100%);
    ${BreakPoint.largeMobile` font-size: 4.8em `}
  }
`

export const PageHeading = StyledComponent
