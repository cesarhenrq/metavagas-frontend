import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';

import FilterCard from '@components/FilterCard';

const filterCardPropsMock = {
  filter: 'JavaScript',
  onClick: jest.fn(),
};

describe('<FilterCard />', () => {
  beforeEach(() => {
    render(<FilterCard {...filterCardPropsMock} />);
  });

  it('should be defined', () => {
    screen.getByTestId('filter-card');
  });

  it('should render base card', () => {
    screen.getByTestId('base-card');
  });

  it('should render text container', () => {
    screen.getByTestId('text-container');
  });

  it('should render text "Vagas"', () => {
    screen.getByText('Vagas');
  });

  it(`should render text "${filterCardPropsMock.filter}"`, () => {
    screen.getByText(filterCardPropsMock.filter);
  });

  it('should render arrow icon', () => {
    screen.getByTestId('arrow');
  });
});
