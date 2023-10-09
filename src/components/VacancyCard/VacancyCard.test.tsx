import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import VacancyCard from './VacancyCard';

describe('VancancyCard component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <VacancyCard
        location={'Betim-MG'}
        technology={'React'}
        vacancyRole={'Desenvolvedor de sistemas pleno'}
      />,
    ).container;
  });

  it('should be defined', () => {
    expect(container).toBeDefined();
  });
  it('to be render technologyLabel', () => {
    screen.getByText('Tecnologia:');
  });
  it('to be render detailsButton', () => {
    screen.getByText('Ver mais detalhes');
  });
});
