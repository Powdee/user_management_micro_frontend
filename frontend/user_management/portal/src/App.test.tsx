import { render, screen } from '@testing-library/react';
import { Portal } from './app';

test('renders learn react link', () => {
  render(<Portal />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
