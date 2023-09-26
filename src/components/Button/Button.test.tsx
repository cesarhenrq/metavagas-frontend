/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { expect, jest } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';

import Button from './Button';

const mockOnClick = jest.fn();

describe('<Button />', () => {
  it('should be defined', () => {
    render(<Button label="test" onClick={mockOnClick} />);

    const element = screen.getByText('test');

    expect(element).toBeDefined();
  });

  it('should render with font-size: 16px as default', () => {
    render(<Button label="test" onClick={mockOnClick} />);

    const element = screen.getByText('test');

    (expect as any)(element).toHaveStyle('font-size: + 16px');
  });

  it('should render with background-color: #FBB04D as default', () => {
    render(<Button label="test" onClick={mockOnClick} />);

    const element = screen.getByText('test');

    (expect as any)(element).toHaveStyle('background-color: + #FBB04D');
  });

  it('should render with border-color: #FBB04D if is not passed', () => {
    render(<Button label="test" onClick={mockOnClick} />);

    const element = screen.getByText('test');

    (expect as any)(element).toHaveStyle('border-color: + #FBB04D');
  });

  it('should render with border-color: white if is passed', () => {
    render(<Button label="test" onClick={mockOnClick} borderColor="white" />);

    const element = screen.getByText('test');

    (expect as any)(element).toHaveStyle('border-color: + #FFFFFF');
  });
});
