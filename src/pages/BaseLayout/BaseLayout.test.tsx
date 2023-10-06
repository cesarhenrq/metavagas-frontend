import { render, screen } from '@testing-library/react';

import BaseLayout from './BaseLayout';

import { BrowserRouter } from 'react-router-dom';

describe('<BaseLayout />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BaseLayout>
          <div data-cy="children">
            <p>children</p>
          </div>
        </BaseLayout>
      </BrowserRouter>,
    );
  });

  it('should render the header', () => {
    screen.getByTestId('header');
  });

  it('should render the footer', () => {
    screen.getByTestId('footer');
  });

  it('should render the main content', () => {
    screen.getByTestId('main-content');
  });

  it('should render the children', () => {
    screen.getByTestId('children');
  });
});
