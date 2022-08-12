/*
  Core.
*/

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Router } from '@/router'
import { GlobalStyle } from '@/styles/StyleGlobal'

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Router />
  </BrowserRouter>
)
