/*
  Footer.
*/

import styled from 'styled-components'
import { BreakPoint } from '@/styles/StyleMixins'

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
  width: 100%;
  padding: 0 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .link-letter {
    font-family: Lobster, cursive;
    font-size: 1.5em;
    text-align: center;
    cursor: pointer;
    ${BreakPoint.largeMobile` font-size: 2.4em `}
  }
`

export const Footer = StyledComponent
