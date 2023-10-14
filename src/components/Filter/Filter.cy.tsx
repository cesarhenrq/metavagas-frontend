import Filter from './Filter';

import Sut from '@utils/helpers/';

describe('<Filter />', () => {
  beforeEach(() => {
    cy.mount(
      <Sut>
        <Filter />
      </Sut>,
    );
  });

  it('should render 3 vacancy types', () => {
    cy.getByCy('checkbox-vacancy-type-container').should('have.length', 3);
  });

  it('should render 2 work arrangements', () => {
    cy.getByCy('checkbox-work-arrangement-container').should('have.length', 2);
  });

  it('should render 3 company sizes', () => {
    cy.getByCy('checkbox-company-size-container').should('have.length', 3);
  });

  it('should render 3 levels', () => {
    cy.getByCy('checkbox-level-container').should('have.length', 3);
  });

  it('should uncheck all checkboxes when click on reset button', () => {
    cy.getByCy('checkbox-vacancy-type-container').click({ multiple: true });
    cy.getByCy('checkbox-work-arrangement-container').click({ multiple: true });
    cy.getByCy('checkbox-company-size-container').click({ multiple: true });
    cy.getByCy('checkbox-level-container').click({ multiple: true });

    cy.getByCy('reset-button').click();

    cy.getByCy('checkbox-vacancy-type-container').should('not.be.checked');
    cy.getByCy('checkbox-work-arrangement-container').should('not.be.checked');
    cy.getByCy('checkbox-company-size-container').should('not.be.checked');
    cy.getByCy('checkbox-level-container').should('not.be.checked');
  });
});
