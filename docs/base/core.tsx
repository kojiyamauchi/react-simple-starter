/*
  Core.
*/

import * as React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'
// For Global Style.
import { GlobalStyle } from '@/styles/StyleGlobal'
// Import AppContainer on React Hot Loader.
import { AppContainer } from 'react-hot-loader'
// Import BrowserRouter on React Router DOM.
import { BrowserRouter } from 'react-router-dom'

// Render Function.
const render = (_component: React.FunctionComponent<{}>): void => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('app')
  )
}

// Render Default.
render(App)

// If Code Modified, Browser Hot Reload.
if (module.hot) {
  module.hot.accept(App, () => {
    render(App)
  })
}
