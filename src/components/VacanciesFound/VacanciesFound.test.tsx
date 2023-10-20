import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import VacanciesFound from './VacanciesFound';

describe('VacanciesFound component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <VacanciesFound allVacancies={255} technology="React" />,
    ).container;
  });

  it('should be defined', () => {
    expect(container).toBeDefined();
  });
  it('to be render allVacancies', () => {
    screen.getByText('255 vagas encontradas');
  });
});
