import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../src/components/theme'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h3 {
    font-family: 'Orbitron', sans-serif;
  }

  body {
    font-family: 'Pridi', serif;
    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.background};
  }

  a {
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s
  }

  a:hover {
    color: ${(props) => props.theme.primaryHover}
  }

  @media (min-width: 450px){
    ::-webkit-scrollbar {
      width: 10px;
      height: 7px;
      background-color: ${(props) => props.theme.white};
      cursor: pointer;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.primary};
    }

    ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.white};
    }
  }
`

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
