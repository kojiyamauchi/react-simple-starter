/*
  PageHeading Component.
*/

import styled from 'styled-components'

import { breakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
  letter: string
  translation?: boolean
}

const PageHeadingComponent: React.FC<Props> = ({ className, letter }): JSX.Element => (
  <h2 className={`${className} secondary-heading`}>This is {letter} Page.</h2>
)

const StyledComponent = styled(PageHeadingComponent)`
  font-size: 3em;
  text-align: center;
  ${(props): string | undefined | false => props.translation && `transform: translateY(-100%);`}
  ${breakPoint.aboveLargeMobile` font-size: 4.8em `}
`

export const PageHeading = StyledComponent
