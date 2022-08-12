/*
  Header Container Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { HeaderContainer } from './Component'
// import userEvent from '@testing-library/user-event'

describe('Header Container Component Unit Test', () => {
  it('Snapshot Testing', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <HeaderContainer />
      </BrowserRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
