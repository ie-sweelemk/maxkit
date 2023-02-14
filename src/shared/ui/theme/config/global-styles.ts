import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
  font-family: ${({ theme }) => theme.font.fontFamily.Mulish};
  font-size: ${({ theme }) => theme.font.fontSize.base};
  font-weight: normal;
  font-style: normal;
  color: ${({ theme }) => theme.colors.dark_main};
  background-color: ${({ theme }) => theme.colors.neutral_bg};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration-skip-ink: auto;
}

html, body, p, div, h1, h2, h3, h4, h5, h6, ul, ol, dl, img, pre, form, fieldset {
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  height: 100%;
}

*, *:after, *:before {
  box-sizing: border-box;
}

.link {
  font-size: ${({ theme }) => theme.font.fontSize.xs};
  color: ${({ theme }) => theme.colors.primary};
}
`;
