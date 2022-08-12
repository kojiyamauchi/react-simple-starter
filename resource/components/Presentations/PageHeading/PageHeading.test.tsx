/*
  PageHeading Component Unit Test.
*/

import '@testing-library/jest-dom/extend-expect'

import { render /* ,screen */ } from '@testing-library/react'

import { PageHeading } from './Component'
// import userEvent from '@testing-library/user-event'

describe('PageHeading Component Unit Test', () => {
  it('Snapshot Testing', () => {
    const { asFragment } = render(<PageHeading letter="" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
