import { render, screen } from '@testing-library/react';

import LoginPage from './LoginPage';

import Sut from '@utils/helpers';

describe('<LoginPage />', () => {
  beforeEach(() => {
    render(
      <Sut>
        <LoginPage />
      </Sut>,
    );
  });

  it('should be defined', () => {
    screen.getByTestId('login-page');
  });

  it('should render <AuthSubHeader />', () => {
    screen.getByTestId('auth-sub-header');
  });

  it('should render <AuthSubHeader /> with text "FAÇA SEU LOGIN"', () => {
    screen.getByText('FAÇA SEU LOGIN');
  });

  it('should render <StepCardContainer />', () => {
    screen.getByTestId('step-card-container');
  });
});
