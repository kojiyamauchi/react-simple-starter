/**
 * @jest-environment jsdom
 */
/*
  Footer Component Unit Test.
*/

import { Footer } from './Component'
import { render /* ,screen */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import userEvent from '@testing-library/user-event'

describe('Footer Component Unit Test', () => {
  it('Snapshot Testing', () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
