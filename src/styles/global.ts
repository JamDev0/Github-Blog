import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${(params) => params.theme.colors.base.background};
  }

  body, button, input, p, a {
    font-size: 1rem;
    font-weight: normal;
    color: ${(params) => params.theme.colors.base.text}
  }
`
