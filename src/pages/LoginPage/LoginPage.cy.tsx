import LoginPage from './LoginPage';

import Sut from '@utils/helpers';

describe('<LoginPage />', () => {
  beforeEach(() => {
    cy.mount(
      <Sut>
        <LoginPage />
      </Sut>,
    );
  });

  it('should be defined', () => {
    cy.getByCy('login-page');
  });

  it('should render <AuthSubHeader />', () => {
    cy.getByCy('auth-sub-header');
  });

  it('should render <AuthSubHeader /> with text "FAÇA SEU LOGIN"', () => {
    cy.getByCy('login-page').contains('FAÇA SEU LOGIN');
  });

  it('should render <StepCardContainer />', () => {
    cy.getByCy('step-card-container');
  });

  it('should render <LoginForm />', () => {
    cy.getByCy('login-form-container');
  });
});
