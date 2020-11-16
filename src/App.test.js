import { render, screen } from '@testing-library/react';
import App from './App';

describe("Top level App", () => {
    test('renders the title of the homepage', () => {
      render(<App />);
      const linkElement = screen.getByText(//i);
      expect(linkElement).toBeInTheDocument();
    });
})
