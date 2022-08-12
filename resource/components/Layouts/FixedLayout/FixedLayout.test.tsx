/*
  Fixed Layout Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { FixedLayout } from './'
// import userEvent from '@testing-library/user-event'

describe('Fixed Layout Component Unit Test', () => {
  it('Snapshot Testing', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <FixedLayout pages="ui-test" />
      </BrowserRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
