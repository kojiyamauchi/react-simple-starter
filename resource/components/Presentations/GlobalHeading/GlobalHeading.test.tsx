/*
  GlobalHeading Component Unit Test.
*/

import { GlobalHeading } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('GlobalHeading Component Unit Test', () => {
  it('Snapshot Testing', () => {
    const { asFragment } = render(<GlobalHeading />)
    expect(asFragment()).toMatchSnapshot()
  })
})
