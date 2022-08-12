/*
  Mixins for Style.
*/

import { css } from 'styled-components'

import { BREAK_POINT } from '@/styles/StyleConstants'
import { BreakPointMember, BreakPointValueMember } from '@/types/type'

// Break Point.
/*
Usage.
Above Small Mobile.  => ${breakPoint.aboveSmallMobile` Add CSS Property `}
Above Middle Mobile. => ${breakPoint.aboveMiddleMobile` Add CSS Property `}
Above Large Mobile.  => ${breakPoint.aboveLargeMobile` Add CSS Property `}
Above Tablet.        => ${breakPoint.aboveTablet` Add CSS Property `}
Above Laptop.        => ${breakPoint.aboveLaptop` Add CSS Property `}
Just Desktop.        => ${breakPoint.justDesktop` Add CSS Property `}
*/
export const breakPoint = Object.keys(BREAK_POINT).reduce((accumulator, current): BreakPointMember => {
  const breakPointKey = current as keyof BreakPointValueMember
  accumulator[breakPointKey] = (args: TemplateStringsArray): import('styled-components').FlattenSimpleInterpolation => css`
    /* stylelint-disable */
    @media (min-width: ${BREAK_POINT[breakPointKey]}px) {
      ${css(args)}
    }
    /* stylelint-enable */
  `
  return accumulator
}, {} as BreakPointMember)
