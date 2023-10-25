import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import { BrowserRouter } from 'react-router-dom';
import VacancyCard from './VacancyCard';

describe('VancancyCard component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <BrowserRouter>
        <VacancyCard
          location={'Betim-MG'}
          technologies={[]}
          vacancyRole={'Desenvolvedor de sistemas pleno'}
          id={''}
        />
      </BrowserRouter>,
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
