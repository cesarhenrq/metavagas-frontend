import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import InitialPage from './InitialPage';

describe('<InitialPage />', () => {
  beforeEach(() => {
    render(
      <>
        <BrowserRouter>
          <InitialPage />
        </BrowserRouter>
      </>,
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
