import { render, screen } from '@testing-library/react';

import RegisterPage from './RegisterPage';

import Sut from '@utils/helpers';

describe('<RegisterPage />', () => {
  beforeEach(() => {
    render(
      <Sut>
        <RegisterPage />
      </Sut>,
    );
  });

  it('should be defined', () => {
    screen.getByTestId('register-page');
  });

  it('should render <AuthSubHeader />', () => {
    screen.getByTestId('auth-sub-header');
  });

  it('should render <AuthSubHeader /> with text "CADASTRA-SE"', () => {
    screen.getByText('CADASTRA-SE');
  });
});
