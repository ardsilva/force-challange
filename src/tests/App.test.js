import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import React from 'react'
import App from '../components/App';

test('checks if the app rendering', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
});

test('landing on an welcome page', () => {
  const history = createMemoryHistory()
  history.push('/force-challenge')
  render(
      <Router history={history}>
        <App />
      </Router>,
  )

  //mounting the screen
  expect(screen.getByRole('heading', {
    name: 'Welcome to iClinic',
  })).toBeInTheDocument()

  //find the button and goes to side picker
  const firstClick = {button: 0}
  userEvent.click(screen.getByText(/START/i), firstClick);

  // check that the content changed to the side pick page
  expect(screen.getByTestId('svg-left-arrow')).toBeInTheDocument()

  //find the back button
  const secondClick = {button: 0}
  userEvent.click(screen.getByText(/back/i), secondClick);
  
  // check that the content changed to the landing page
  expect(screen.getByRole('heading', {
    name: 'FRONTEND CHALLENGE',
  })).toBeInTheDocument()
})
