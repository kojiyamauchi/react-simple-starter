/*
  Header Container Component Unit Test.
*/

import { HeaderContainer } from './Component'
import { BrowserRouter } from 'react-router-dom'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
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
