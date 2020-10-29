import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the title of the homepage', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the Hackney Council HR System/i);
  expect(linkElement).toBeInTheDocument();
});
