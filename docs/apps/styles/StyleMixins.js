/*
  Mixins for Style.
*/

// Import Styled Components.
import * as styled from 'styled-components'

// Import Style Variables.
import * as styleVariables from '@/styles/StyleVariables'

// Break Point.
/*
Usage.
Small Mobile.  => ${styleMixins.breakPoint.smallMobile` Add CSS Property `}
Mobile.        => ${styleMixins.breakPoint.mobile` Add CSS Property `}
Large Mobile.  => ${styleMixins.breakPoint.largeMobile` Add CSS Property `}
Tablet.        => ${styleMixins.breakPoint.tablet` Add CSS Property `}
Desktop.       => ${styleMixins.breakPoint.deskTop` Add CSS Property `}
Large Desktop. => ${styleMixins.breakPoint.smallMobile` Add CSS Property `}
*/
export const breakPoint = Object.keys(styleVariables.BREAK_POINT_WIDTH).reduce((index, BB) => {
index[BB] = (...args) => styled.css`
  @media (min-width: ${styleVariables.BREAK_POINT_WIDTH[BB]}px) {
    ${ styled.css(...args) }
  }
`
return index
}, {})

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

// Flex Horizontal Space Between. (Utilities)
export const FlexHorizontalBetween = styled.css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// Flex Horizontal Flex Start. (Utilities)
export const FlexHorizontalStart = styled.css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

// Flex Horizontal Flex End. (Utilities)
export const FlexHorizontalEnd = styled.css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
