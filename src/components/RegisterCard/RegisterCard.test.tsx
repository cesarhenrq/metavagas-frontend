import { render, screen } from '@testing-library/react';

import RegisterCard from './RegisterCard';

import Sut from '@utils/helpers';

describe('<RegisterCard />', () => {
  beforeEach(() => {
    render(
      <Sut>
        <RegisterCard />
      </Sut>,
    );
  });

  it('should be defined', () => {
    screen.getByTestId('register-card');
  });

  it('should render base card', () => {
    screen.getByTestId('base-card');
  });

  it('should render circle', () => {
    screen.getByTestId('circle');
  });

  it('should render text', () => {
    screen.getByTestId('text');
  });

  it('should render person icon', () => {
    screen.getByTestId('person-icon');
  });

  it('should render link', () => {
    screen.getByText('cadastro gratuito');
  });
});
