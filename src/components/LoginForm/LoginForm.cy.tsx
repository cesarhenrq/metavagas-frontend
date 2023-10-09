import LoginForm from './LoginForm';

import Sut from '@utils/helpers';

describe('<LoginForm />', () => {
  beforeEach(() => {
    cy.mount(
      <Sut>
        <LoginForm />
      </Sut>,
    );
  });

  it('should be defined', () => {
    cy.getByCy('login-form-container');
  });

  it('should render text "Faça seu login"', () => {
    cy.getByCy('login-form-container').contains('Faça seu login');
  });

  it('should render label "Seu e-mail"', () => {
    cy.getByCy('login-form-container').contains('Seu e-mail');
  });

  it('should render input email', () => {
    cy.getByCy('email-input');
  });

  it('should render label "Senha"', () => {
    cy.getByCy('login-form-container').contains('Senha');
  });

  it('should render input password', () => {
    cy.getByCy('password-input');
  });

  it('should render eye icon', () => {
    cy.getByCy('eye-icon').should('have.length', 1);
  });

  it('should render button "Entrar"', () => {
    cy.getByCy('login-form-container').contains('Entrar');
  });

  it('should render text "Não é cadastrado?"', () => {
    cy.getByCy('login-form-container').contains('Não é cadastrado?');
  });

  it('should render link "Cadastre-se gratuitamente"', () => {
    cy.getByCy('login-form-container').contains('Cadastre-se gratuitamente');
  });
});
