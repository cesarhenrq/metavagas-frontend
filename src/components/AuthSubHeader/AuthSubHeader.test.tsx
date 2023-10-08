import { render, screen } from '@testing-library/react';

import Sut from '@utils/helpers';

import AuthSubHeader from './AuthSubHeader';

describe('<AuthSubHeader />', () => {
  beforeEach(() => {
    render(
      <Sut>
        <AuthSubHeader authLabel="FAÇA SEU LOGIN" />
      </Sut>,
    );
  });

  it('should be defined', () => {
    screen.getByTestId('auth-sub-header');
  });

  it('should render text "FAÇA SEU LOGIN"', () => {
    screen.getByText('FAÇA SEU LOGIN');
  });

  it('should render larger text', () => {
    screen.getByTestId('larger-text');
  });

  it('should render person icon', () => {
    screen.getByTestId('person-icon');
  });

  it('should render text "Com um único cadastro você consegue encontrar sua vaga"', () => {
    screen.getByText('Com um único cadastro você consegue encontrar sua vaga');
  });

  it('should render message icon', () => {
    screen.getByTestId('email-icon');
  });

  it('should render text "Receba alertas sobre as vagas que você procura"', () => {
    screen.getByText('Receba alertas sobre as vagas que você procura');
  });
});
