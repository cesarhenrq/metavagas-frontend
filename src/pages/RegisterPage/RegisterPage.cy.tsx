import RegisterPage from './RegisterPage';

import Sut from '@utils/helpers';

describe('<RegisterPage />', () => {
  beforeEach(() => {
    cy.mount(
      <Sut>
        <RegisterPage />
      </Sut>,
    );
  });

  it('should be defined', () => {
    cy.getByCy('register-page');
  });

  it('should render <AuthSubHeader />', () => {
    cy.getByCy('auth-sub-header');
  });

  it('should render <AuthSubHeader /> with text "CADASTRA-SE"', () => {
    cy.getByCy('register-page').contains('CADASTRA-SE');
  });

  it('should render <StepCardContainer />', () => {
    cy.getByCy('step-card-container');
  });

  it('should render <RegisterForm />', () => {
    cy.getByCy('register-form-container');
  });
});
