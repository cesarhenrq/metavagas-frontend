/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { expect, jest } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(<SearchBar />).container;

    jest.resetAllMocks();
  });

  it('should render the component', () => {
    expect(container).toBeDefined();
  });

  it('should render with the text "O quê você procura?"', () => {
    (expect as any)(container).toHaveTextContent('O quê você procura?');
  });

  it('should render with the text "Onde?"', () => {
    (expect as any)(container).toHaveTextContent('Onde?');
  });

  it('should not render with the text "Buscas mais recentes:"', () => {
    (expect as any)(container).not.toHaveTextContent('Buscas mais recentes:');
  });

  it('should render with text "Buscas mais recentes:" when search some tech or position', async () => {
    const input = screen.getByPlaceholderText(
      'Cargo, tecnologia ou palavra-chave',
    );

    const button = screen.getByText('Buscar vagas');

    await userEvent.type(input, 'test');
    await userEvent.click(button);

    (expect as any)(container).toHaveTextContent('Buscas mais recentes:');
  });

  it('should render the recent searches when search some tech or position', async () => {
    const input = screen.getByPlaceholderText(
      'Cargo, tecnologia ou palavra-chave',
    );

    const button = screen.getByText('Buscar vagas');

    await userEvent.type(input, 'test');

    await userEvent.click(button);

    (expect as any)(input).toHaveValue('test');
  });

  it('should render the text in input when click in recent search', async () => {
    const input = screen.getByPlaceholderText(
      'Cargo, tecnologia ou palavra-chave',
    );

    const button = screen.getByText('Buscar vagas');

    await userEvent.type(input, 'test');
    await userEvent.click(button);
    await userEvent.clear(input);

    const recentSearch = screen.getByText('test');

    await userEvent.click(recentSearch);

    (expect as any)(input).toHaveValue('test');
  });
});
