import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    background: #0B1220;
    color: white;
    font-family: 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button, input, select {
    font-family: inherit;
  }
`

export default GlobalStyle
