import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import SaveSearches from './SaveSearches';

describe('SaveSearches component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(<SaveSearches />).container;
  });

  it('should be defined', () => {
    expect(container).toBeDefined();
  });

  it('to be render SaveButton', () => {
    screen.getByText('Salvar busca');
  });
});
