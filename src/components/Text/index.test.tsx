/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';

import { fontSizes, fontColors } from './test-helpers';

import Text from './';

describe('<Text />', () => {
  it('should be defined', () => {
    render(<Text label="test" />);

    const element = screen.getByText('test');

    expect(element).toBeDefined();
  });

  fontSizes.forEach(fontSize => {
    it(`should render with font-size: ${fontSize.value}`, () => {
      render(<Text label="test" fontSize={fontSize.label} />);

      const element = screen.getByText('test');

      (expect as any)(element).toHaveStyle(`font-size: + ${fontSize.value}`);
    });
  });

  fontColors.forEach(fontColor => {
    it(`should render with color: ${fontColor.value}`, () => {
      render(<Text label="test" fontColor={fontColor.label} />);

      const element = screen.getByText('test');

      (expect as any)(element).toHaveStyle(`color: + ${fontColor.value}`);
    });
  });

  it('should render with font-size: 16px as default', () => {
    render(<Text label="test" />);

    const element = screen.getByText('test');

    (expect as any)(element).toHaveStyle('font-size: + 16px');
  });

  it('should render with color: #1A1033 as default', () => {
    render(<Text label="test" />);

    const element = screen.getByText('test');

    (expect as any)(element).toHaveStyle('color: + #1A1033');
  });
});
