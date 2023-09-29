/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { expect, jest } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import InputWithIcon from './InputWithIcon';

export const mockProps = {
  placeholder: 'Localização',
};

describe('<InputWithIcon />', () => {
  let container: HTMLElement;

  const onChange = jest.fn();

  beforeEach(() => {
    container = render(
      <InputWithIcon icon="location" {...mockProps} onChange={onChange} />,
    ).container;

    jest.resetAllMocks();
  });

  it('should render the component', () => {
    expect(container).toBeDefined();
  });

  it('should render the input', () => {
    const input = screen.getByPlaceholderText('Localização');
    expect(input).toBeDefined();
  });

  it('should render the input with the correct value', () => {
    const input = screen.getByPlaceholderText('Localização');
    (expect as any)(input).toHaveValue('');
  });

  it('should change the input value', async () => {
    const input = screen.getByPlaceholderText('Localização');
    input.focus();

    (expect as any)(input).not.toHaveValue('test');

    await userEvent.type(input, 'test');

    (expect as any)(input).toHaveValue('test');
  });

  it('should call the onChange function', async () => {
    const input = screen.getByPlaceholderText('Localização');

    input.focus();

    (expect as any)(input).not.toHaveValue('test');

    await userEvent.type(input, 'test');

    (expect as any)(input).toHaveValue('test');

    expect(onChange).toHaveBeenCalledTimes(4);
  });
});
