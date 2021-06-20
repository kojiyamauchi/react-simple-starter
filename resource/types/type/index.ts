export type ValueOf<T> = T[keyof T]

export type BreakPoint = 'aboveSmallMobile' | 'aboveMiddleMobile' | 'aboveLargeMobile' | 'aboveTablet' | 'aboveLaptop' | 'justDesktop'

export type BreakPointValueMember = {
  readonly [P in BreakPoint]: number
}

export type BreakPointMember = {
  [P in BreakPoint]: (arg: TemplateStringsArray) => import('styled-components').FlattenSimpleInterpolation
}
