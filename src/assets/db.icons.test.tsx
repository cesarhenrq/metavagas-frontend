/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import * as I from './db.icons';
describe('testing image rendering', () => {
  it('should be defined', () => {
    render(<I.Person fill="yellow" width={34} height={34} />);

    const element = screen.getByTestId('person-icon');

    (expect as any)(element).toBeDefined();
  });
});
