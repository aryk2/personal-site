import { useTheme as useThemeEmotion } from 'emotion-theming'
import emotionStyled, { CreateStyled } from '@emotion/styled'

export const colors = {

}

export const breakpoints = ['320px', '768px', '1024px', '1440px']

export const breakpointsObj = {
  sm: 320,
  md: 768,
  lg: 1024,
  xl: 1440,
}

export const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`,
  xlarge: `@media screen and (min-width: ${breakpoints[3]})`,
}

const theme = {
  breakpoints,
  breakpointsObj,
  mediaQueries,
  colors
}

export type ThemeType = typeof theme

export default theme

export { css } from '@emotion/core'
export const styled = emotionStyled as CreateStyled<ThemeType>
export const useTheme = () => useThemeEmotion<ThemeType>()