import { render, screen } from '@testing-library/react';

import Filter from './Filter';

import Sut from '@utils/helpers/Sut';

describe('<Filter />', () => {
  beforeEach(() => {
    render(
      <Sut>
        <Filter />
      </Sut>,
    );
  });

  it('should be defined', () => {
    screen.getByTestId('filter');
  });

  it('should render <TitleContainer />', () => {
    screen.getByTestId('title-container');
  });

  it('should render text "Filtre sua busca"', () => {
    screen.getByText('Filtre sua busca');
  });

  it('should render <Reset />', () => {
    screen.getByTestId('reset-button');
  });

  it('should render <Filters />', () => {
    screen.getByTestId('filters');
  });

  it('should render text "Tecnologia"', () => {
    screen.getByText('Tecnologia');
  });

  it('should render text "Tipo de vaga"', () => {
    screen.getByText('Tipo de vaga');
  });

  it('should render text "Regime de trabalho"', () => {
    screen.getByText('Regime de trabalho');
  });

  it('should render text "Tamanho da empresa"', () => {
    screen.getByText('Tamanho da empresa');
  });

  it('should render text "Faixa salarial"', () => {
    screen.getByText('Faixa salarial');
  });

  it('should render text "Nível de experiência"', () => {
    screen.getByText('Nível de experiência');
  });

  it('should render <Button /> with text "Filtar"', () => {
    screen.getByText('Filtrar');
  });
});
