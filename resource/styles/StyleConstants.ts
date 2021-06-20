/*
  Constants for Style.
*/

// Each Device Width.
export const DEVICE_WIDTH = {
  SMALL_MOBILE: 320,
  MIDDLE_MOBILE: 414,
  LARGE_MOBILE: 767,
  TABLET: 1024,
  LAPTOP: 1536,
  DESKTOP: 1920
} as const

// Break Point.
export const BREAK_POINT = {
  aboveSmallMobile: DEVICE_WIDTH.SMALL_MOBILE + 1,
  aboveMiddleMobile: DEVICE_WIDTH.MIDDLE_MOBILE + 1,
  aboveLargeMobile: DEVICE_WIDTH.LARGE_MOBILE + 1,
  aboveTablet: DEVICE_WIDTH.TABLET + 1,
  aboveLaptop: DEVICE_WIDTH.LAPTOP + 1,
  justDesktop: DEVICE_WIDTH.DESKTOP
}

// Set Global Font.
export const GLOBAL_FONT =
  '"Source Sans Pro", "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "游ゴシック Medium", meiryo, sans-serif'

// Color.
export const GLOBAL_COLOR = '#777'
