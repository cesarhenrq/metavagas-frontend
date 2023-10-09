import { render, screen } from '@testing-library/react';

import InitialPage from './InitialPage';

import Sut from '@utils/helpers';

describe('<InitialPage />', () => {
  beforeEach(() => {
    render(
      <Sut>
        <InitialPage />
      </Sut>,
    );
  });

  it('should render the sub header', () => {
    screen.getByTestId('sub-header');
  });

  it('should render the search bar', () => {
    screen.getByTestId('search-bar');
  });

  it('should render the filter card container', () => {
    screen.getByTestId('filter-card-container');
  });
});
