import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
describe("Navbar", ()=> {
  it("must display a title",() =>);
  {
    render(<Navbar />);
    expect(screen.queryByText(/Navbar/i)).toBeInTheDocument();

  }
})

describe("Products", ()=> {
  it("products price",() =>);
  {
    render(<Products />);
    expect(screen.queryByText(/Products/i)).toBeInTheDocument();

  }
})