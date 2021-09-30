/* eslint-disable default-case */
import React from 'react';
import axios from 'axios';
import {render, screen, act, waitFor, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import ForceSide from '../components/ForceSide';

afterEach(() => {    
    jest.resetAllMocks();
  });

test('rendering Forceside page', () => {
    render(<ForceSide />)
    expect(screen.getByRole('img', {
        name: 'Loading...',
      })).toBeInTheDocument()
})

test('rerendering Luke´s page', async () => {
      const mockGet = jest.spyOn(axios, 'get');
        mockGet.mockImplementation((url) => {
        switch (url) {
            case 'https://swapi.dev/api/people/1':
            return Promise.resolve({ data: {name: 'Luke Skywalker'} });
            case 'https://swapi.dev/api/people/4':
            return Promise.resolve({ data: {name: 'Darth Vader' }});
        }
        });
        
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<ForceSide />);
      expect(
        await waitFor(() => screen.getByText(/Luke Skywalker/i))
      ).toBeInTheDocument();
    });

    fireEvent.click(screen.getAllByText(/choose your path again, Padawan/i)[0]);
    expect(
        await waitFor(() => screen.getByText(/Luke Skywalker/i))
      ).toBeInTheDocument();
})
