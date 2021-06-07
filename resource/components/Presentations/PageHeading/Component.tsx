/*
  PageHeading Component.
*/

import styled from 'styled-components'
import { BreakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
  letter: string
  translation?: boolean
}

const PageHeadingComponent: React.VFC<Props> = ({ className, letter }): JSX.Element => (
  <h2 className={`${className} secondary-heading`}>This is {letter} Page.</h2>
)

const StyledComponent = styled(PageHeadingComponent)`
  font-size: 3em;
  text-align: center;
  ${(props): string | undefined | false => props.translation && `transform: translateY(-100%);`}
  ${BreakPoint.largeMobile` font-size: 4.8em `}
`

export const PageHeading = StyledComponent
