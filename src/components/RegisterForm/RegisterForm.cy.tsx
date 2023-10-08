import RegisterForm from './RegisterForm';

import Sut from '@utils/helpers';

describe('<RegisterForm />', () => {
  beforeEach(() => {
    cy.mount(
      <Sut>
        <RegisterForm />
      </Sut>,
    );
  });

  it('should be defined', () => {
    cy.getByCy('register-form-container');
  });

  it('should render text "Faça seu cadastro"', () => {
    cy.getByCy('register-form-container').contains('Faça seu cadastro');
  });

  it('should render label "Seu e-mail"', () => {
    cy.getByCy('register-form-container').contains('Seu e-mail');
  });

  it('should render input email', () => {
    cy.getByCy('email-input');
  });

  it('should render label "Senha"', () => {
    cy.getByCy('register-form-container').contains('Senha');
  });

  it('should render input password', () => {
    cy.getByCy('password-input');
  });

  it('should render label "Confirmar senha"', () => {
    cy.getByCy('register-form-container').contains('Confirmar senha');
  });

  it('should render input password confirmation', () => {
    cy.getByCy('password-confirm-input');
  });

  it('should render eye icon', () => {
    cy.getByCy('eye-icon').should('have.length', 2);
  });

  it('should render button "Cadastrar"', () => {
    cy.getByCy('register-form-container').contains('Cadastrar');
  });

  it('should render text "Já é cadastrado?"', () => {
    cy.getByCy('register-form-container').contains('Já é cadastrado?');
  });

  it('should render link "Faça o login"', () => {
    cy.getByCy('register-form-container').contains('Faça o login');
  });
});
