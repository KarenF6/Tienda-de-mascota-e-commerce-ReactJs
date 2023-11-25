import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('funcionalidades navbar', () => {
    render(<Navbar />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('funcionalidades products', () => {
    render(<Products />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  