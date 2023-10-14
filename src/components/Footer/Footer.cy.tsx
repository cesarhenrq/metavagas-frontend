import Footer from './Footer';

import Sut from '@utils/helpers';

describe('<Footer />', () => {
  beforeEach(() => {
    cy.mount(
      <Sut>
        <Footer />
      </Sut>,
    );
  });

  it('should footer has background-color: var(--purple-dark)', () => {
    cy.getByCy('footer').should(
      'have.css',
      'background-color',
      'rgb(26, 16, 51)',
    );
  });

  it('should footer has padding: padding: 4.375rem 8.4375rem 6.875rem 8.4375rem', () => {
    cy.getByCy('footer').should('have.css', 'padding', '70px 135px 110px');
  });

  it('should footer has display: flex', () => {
    cy.getByCy('footer').should('have.css', 'display', 'flex');
  });

  it('should footer has justify-content: space-between', () => {
    cy.getByCy('footer').should('have.css', 'justify-content', 'space-between');
  });

  it('should footer has align-items: flex-start', () => {
    cy.getByCy('footer').should('have.css', 'align-items', 'flex-start');
  });

  it('should footer has width: 100vw', () => {
    cy.getByCy('footer').should('have.css', 'width', '500px');
  });

  it('should contact info has display: flex', () => {
    cy.getByCy('contact-info').should('have.css', 'display', 'flex');
  });

  it('should contact info has flex-direction: column', () => {
    cy.getByCy('contact-info').should('have.css', 'flex-direction', 'column');
  });

  it('should contact info has gap: 1rem', () => {
    cy.getByCy('contact-info').should('have.css', 'gap', '16px');
  });

  it('should contact info item has display: flex', () => {
    cy.getByClassLike('contact-info-item').should(
      'have.css',
      'display',
      'flex',
    );
  });

  it('should contact info item has gap: 0.5rem', () => {
    cy.getByClassLike('contact-info-item').should('have.css', 'gap', '8px');
  });
});
