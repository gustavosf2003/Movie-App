import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './pages/Home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Gustavo");
  expect(linkElement).toBeInTheDocument();
});
test('Title Name', () => {
  render(<Home />);
  const title = screen.getByText("Released");
  expect(title).toBeInTheDocument();
});
