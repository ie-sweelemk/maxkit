import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
  font-family: ${({ theme }) => theme.font.fontFamily.RedHatDisplay};
  font-size: ${({ theme }) => theme.font.fontSize.base};
  font-weight: normal;
  font-style: normal;
  color: ${({ theme }) => theme.colors.dark_main};
  background-color: ${({ theme }) => theme.colors.neutral_bg};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration-skip-ink: auto;
  overflow: hidden;
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

#root {
  width: 100%;
  height: 100vh;
}

.typography {
  font-size: ${({ theme }) => theme.font.fontSize.base};
  font-weight: 500;
}

:where(.link).typography {
  font-size: ${({ theme }) => theme.font.fontSize.xs};
}

.link {
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  outline: none;
  font-weight: 500;

  &:hover, &:active {
    color: ${({ theme }) => theme.colors.primary_hover};
  }
}

// title 42, 32, 24, 16, 14, 12

h1.typography {
  font-size: ${({ theme }) => theme.font.fontSize.xxxl};
}

h2.typography {
  font-size: ${({ theme }) => theme.font.fontSize.xxl};
}

h3.typography {
  font-size: ${({ theme }) => theme.font.fontSize.xl};
}

h4.typography {
  font-size: ${({ theme }) => theme.font.fontSize.lg};
}

h5.typography {
  font-size: ${({ theme }) => theme.font.fontSize.base};
}

h6.typography {
  font-size: ${({ theme }) => theme.font.fontSize.sm};
}

`;
