import {render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import Welcome from '../components/Welcome'

test('rendering Welcome page', () => {
  render(<Welcome />)
  expect(screen.getByText(/Welcome to/i)).toBeInTheDocument()
})