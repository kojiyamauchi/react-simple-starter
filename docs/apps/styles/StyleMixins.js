/*
  Mixins for Style.
*/

// Import Styled Components.
import * as styled from 'styled-components'

// Pages Mixins.
export const pagesStyle = styled.css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-repeat: no-repeat;
  background-size: 25% auto;
  background-position: 80% center;
`

// Heading02 Mixins.
export const Heading02 = styled.css`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
h2 {
  font-size: 3rem;
  font-weight: 300;
  transform: translateY(-100%);
}
`

// Flex Center. (Utilities)
export const FlexCenter = styled.css`
  display: flex;
  justify-content: center;
  align-items: center;
`
