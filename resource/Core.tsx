/*
  Core.
*/

import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from '@/styles/StyleGlobal'
import { Router } from '@/router'

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <Router />
  </BrowserRouter>,
  document.getElementById('app')
)
