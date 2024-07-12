import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
describe('Testing <Home />', () => {
  it('Should be in the component', () => {
    render(<Home />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'Next.js Logo');
  });
});
