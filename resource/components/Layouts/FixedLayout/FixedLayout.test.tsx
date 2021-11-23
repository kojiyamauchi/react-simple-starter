/**
 * @jest-environment jsdom
 */
/*
  Fixed Layout Component Unit Test.
*/

import { FixedLayout } from './'
import { BrowserRouter } from 'react-router-dom'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
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
