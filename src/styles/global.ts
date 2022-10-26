import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    :focus {
      outline: none;

      box-shadow: 0px 0px 0px 2px ${(params) => params.theme.colors.brand.blue};
    }
  }

  body {
    background-color: ${(params) => params.theme.colors.base.background};
  }

  body, button, input, p, a {
    font-size: 1rem;
    font-weight: normal;
    color: ${(params) => params.theme.colors.base.text};
    line-height: 160%;
    font-family: 'Nunito', sans-serif;
  }
`
