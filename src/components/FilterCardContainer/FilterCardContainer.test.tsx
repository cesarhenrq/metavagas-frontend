import { render, screen } from '@testing-library/react';

import Sut from '@utils/helpers';

import FilterCardContainer from './FilterCardContainer';

describe('<FilterCardContainer />', () => {
  beforeEach(() => {
    render(
      <Sut>
        <FilterCardContainer />
      </Sut>,
    );
  });

  it('should be defined', () => {
    screen.getByTestId('filter-card-container');
  });

  it('should render navigation-and-card wrapper', () => {
    screen.getByTestId('navigation-and-card');
  });

  it('should render text-and-navigation wrapper', () => {
    screen.getByTestId('text-and-navigation');
  });

  it('should render filter navigation component', () => {
    screen.getByTestId('filter-navigation');
  });

  it('should render register card component', () => {
    screen.getByTestId('register-card');
  });

  it('should render text "Vagas de emprego em todo Brasil"', () => {
    screen.getByText('Vagas de emprego em todo Brasil');
  });
});
