import { DefaultTheme } from 'styled-components';

export * from "./global-styles";
import { typography, colors, spacing, borderRadius } from './variables';

export const theme: DefaultTheme = {
  font: typography,
  colors,
  spacing,
  borderRadius,
}