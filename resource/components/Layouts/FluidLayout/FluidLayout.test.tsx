/**
 * @jest-environment jsdom
 */
/*
  Fluid Layout Component Unit Test.
*/

import { FluidLayout } from './'
import { BrowserRouter } from 'react-router-dom'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Fluid Layout Component Unit Test', () => {
  it('Snap Shot Testing', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <FluidLayout pages="ui-test" />
      </BrowserRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
