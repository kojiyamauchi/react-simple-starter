/*
  Core.
*/

// Import React.
import React from 'react'

// Import React DOM.
import ReactDOM from 'react-dom'

// Import Component.
import App from '@/apps/App'

// Import Global Styles.
import '@/styles/StyleGlobal'

// Import AppContainer on React Hot Loader.
import { AppContainer } from 'react-hot-loader'

// Import BrowserRouter on React Router DOM.
import { BrowserRouter } from 'react-router-dom'

// Render Function.
const render = component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
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
