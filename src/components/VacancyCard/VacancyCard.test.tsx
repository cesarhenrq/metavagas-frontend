import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import VancacyCard from './VacancyCard';

describe('VancancyCard component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(<VancacyCard />).container;
  });

  it('should be defined', () => {
    expect(container).toBeDefined();
  });

  it('to be render jobTitle', () => {
    screen.getByText('Desenvolvedor de Sistemas Pleno');
  });

  it('to be render location', () => {
    screen.getByText('Localização: Betim - MG');
  });
  it('to be render technologyLabel', () => {
    screen.getByText('Tecnologia:');
  });
  it('to be render detailsLabel', () => {
    screen.getByText('Phyton');
  });
  it('to be render detailsButton', () => {
    screen.getByText('Ver mais detalhes');
  });
});
