/*
  Navigation Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Navigation } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Navigation Component Unit Test', () => {
  it('Snapshot Testing', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
