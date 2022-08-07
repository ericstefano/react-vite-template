import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  const onClick = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Should forward button props', () => {
    render(<Button disabled />);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });

  it('Should run onClick when clicked', async () => {
    render(<Button onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
