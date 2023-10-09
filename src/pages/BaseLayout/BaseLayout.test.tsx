import { render, screen } from '@testing-library/react';

import BaseLayout from './BaseLayout';

import Sut from '@utils/helpers';

describe('<BaseLayout />', () => {
  beforeEach(() => {
    render(
      <Sut>
        <BaseLayout>
          <div data-cy="children">
            <p>children</p>
          </div>
        </BaseLayout>
      </Sut>,
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
