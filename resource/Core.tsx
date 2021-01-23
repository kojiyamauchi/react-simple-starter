/*
  Core.
*/

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from '@/styles/StyleGlobal'
import { Router } from '@/router'

const render = (): void => {
  ReactDOM.render(
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>,
    document.getElementById('app')
  )
}

render()
