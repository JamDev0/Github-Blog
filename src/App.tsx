import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ProfileProvider } from './hooks/useProfile'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProfileProvider>
          <Router />

          <GlobalStyles />
        </ProfileProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
