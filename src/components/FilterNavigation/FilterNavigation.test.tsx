import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';

import FilterNavigation from './FilterNavigation';

const filterNavigationPropsMock = {
  activeTab: 'location',
  onClick: jest.fn(),
};

describe('<FilterNavigation />', () => {
  beforeEach(() => {
    render(<FilterNavigation {...filterNavigationPropsMock} />);
  });

  it('should be defined', () => {
    screen.getByTestId('filter-navigation');
  });

  it('should render filter navigation item location', () => {
    screen.getByTestId('filter-navigation-location');
  });

  it('should render filter navigation item tecnology', () => {
    screen.getByTestId('filter-navigation-tecnology');
  });

  it('should render filter navigation item job', () => {
    screen.getByTestId('filter-navigation-job');
  });

  it('should render computer icon', () => {
    screen.getByTestId('computer-icon');
  });

  it('should render location icon', () => {
    screen.getByTestId('location-icon');
  });

  it('should render suitcase icon', () => {
    screen.getByTestId('suitcase-icon');
  });

  it('should render text "Tecnologia"', () => {
    screen.getByText('Tecnologia');
  });

  it('should render text "Cidades"', () => {
    screen.getByText('Cidades');
  });

  it('should render text "Cargos"', () => {
    screen.getByText('Cargos');
  });
});
