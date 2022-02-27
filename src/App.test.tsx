import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './pages/Home';

test('API name', () => {
  render(<Home />);
  const api = screen.getByText("https://api.tvmaze.com/shows/6771");
  expect(api).toBeInTheDocument();
});
