/*
  Footer Component.
*/

import styled from 'styled-components'
import { breakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const FooterComponent: React.VFC<Props> = ({ className }): JSX.Element => (
  <footer className={className}>
    <a href="http://kojiyamauchi.com" className="link-letter" target="_blank" rel="noreferrer">
      © {new Date().getFullYear()} All The Small Things, All Rights Reserved.
    </a>
  </footer>
)

const StyledComponent = styled(FooterComponent)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .link-letter {
    font-family: Lobster, cursive;
    font-size: 1.5em;
    text-align: center;
    cursor: pointer;
    ${breakPoint.aboveLargeMobile` font-size: 2.4em `}
  }
`

export const Footer = StyledComponent
