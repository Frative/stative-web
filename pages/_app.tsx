import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from '../stores'
import theme from "../theme";

function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <Component {...pageProps} />
          </ThemeProvider>
      </Provider>
  )
}

export default App
