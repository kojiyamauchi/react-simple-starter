/*
  Core.
*/

// Import React.
import React from 'react'

// Import React DOM.
import ReactDOM from 'react-dom'

// Import Component.
import App from '@/apps/App'

// Import BrowserRouter on React Router DOM.
import { BrowserRouter } from 'react-router-dom'

// Import Global Styles.
import '@/styles/StyleGlobal'

// Render on index.html
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
)
