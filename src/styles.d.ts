import 'styled-components';
import {
  typography,
  colors,
  spacing,
  borderRadius
} from 'shared/ui/theme/config/variables';


declare module 'styled-components' {
  export interface DefaultTheme {
    font: typeof typography;
    colors: typeof colors;
    spacing: typeof spacing;
    borderRadius: typeof borderRadius;
  }
}
