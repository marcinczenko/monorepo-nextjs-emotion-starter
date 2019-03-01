import React from 'react'
import { render } from 'react-testing-library'
import { Welcome } from '../../../components/welcome'

describe('Welcome', () => {
  it('has proper styling', () => {
    const { container } = render(<Welcome />)
    expect(container).toMatchSnapshot()
  })

  it('displays welcome text', () => {
    const { getByText } = render(<Welcome />)
    expect(getByText(/welcome/i)).toBeInTheDocument()
  })
})
