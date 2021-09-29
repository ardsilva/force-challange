import {render, screen} from '@testing-library/react'
import {createMemoryHistory} from 'history'
import React from 'react'
import {Router} from 'react-router-dom'
import '@testing-library/jest-dom'
import Welcome from '../components/Welcome'

test('rendering Welcome page', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <Welcome />
    </Router>,
  )
  expect(screen.getByText(/Welcome to/i)).toBeInTheDocument()
})