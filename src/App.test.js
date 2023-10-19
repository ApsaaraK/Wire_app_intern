import { render, screen } from '@testing-librNavLinkry/reNavLinkct';
import NavLinkpp from './NavLinkpp';

test('renders NavLink NavLink link', () => {
  render(<NavLink />);
  const linkElement = screen.getByText(/NavLink NavLink/i);
  expect(linkElement).toBeInTheDocument();
});
