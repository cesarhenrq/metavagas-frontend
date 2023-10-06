/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';

import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

describe('<Header />', () => {
  beforeEach(() => {
    render(
      <>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </>,
    );
  });

  it('should be defined', () => {
    const element = screen.getByText('meta');
    const element2 = screen.getByText('vagas');
    const element3 = screen.getByText('Entrar');
    const element4 = screen.getByText('Cadastrar-se gratuitamente');

    expect(element).toBeDefined();
    expect(element2).toBeDefined();
    expect(element3).toBeDefined();
    expect(element4).toBeDefined();
  });

  it('should meta text render with font-size: 32px as default', () => {
    const element = screen.getByText('meta');

    (expect as any)(element).toHaveStyle('font-size: + 32px');
  });

  it('should meta text render with color: white', () => {
    const element = screen.getByText('meta');

    (expect as any)(element).toHaveStyle('color: + #FFFFFF');
  });

  it('should vagas text render with font-size: 32px', () => {
    const element = screen.getByText('vagas');

    (expect as any)(element).toHaveStyle('font-size: + 32px');
  });

  it('should vagas text render with color: #FBB04D (yellow)', () => {
    const element = screen.getByText('vagas');

    (expect as any)(element).toHaveStyle('color: + #FBB04D');
  });

  it('should Entrar text render with font-size: 16px', () => {
    const element = screen.getByText('Entrar');

    (expect as any)(element).toHaveStyle('font-size: + 16px');
  });

  it('should Entrar text render with color: #FFFFFF (white)', () => {
    const element = screen.getByText('Entrar');

    (expect as any)(element).toHaveStyle('color: + #FFFFFF');
  });

  it('should Cadastrar-se gratuitamente text render with font-size: 16px', () => {
    const element = screen.getByText('Cadastrar-se gratuitamente');

    (expect as any)(element).toHaveStyle('font-size: + 16px');
  });

  it('should Cadastrar-se gratuitamente text render with color: #1A1033 (purple dark)', () => {
    const element = screen.getByText('Cadastrar-se gratuitamente');

    (expect as any)(element).toHaveStyle('color: + #1A1033');
  });
});
