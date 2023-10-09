import RegisterCard from './RegisterCard';

import Sut from '@utils/helpers';

describe('<RegisterCard />', () => {
  beforeEach(() => {
    cy.mount(
      <Sut>
        <RegisterCard />
      </Sut>,
    );
  });

  it('should register card has margin-top: 2rem', () => {
    cy.getByCy('register-card').should('have.css', 'margin-top', '32px');
  });

  it('should base card has padding-top: 2rem', () => {
    cy.getByCy('base-card').should('have.css', 'padding-top', '32px');
  });

  it('should base card has position: relative', () => {
    cy.getByCy('base-card').should('have.css', 'position', 'relative');
  });

  it('should link has color: purple-dark-secondary', () => {
    cy.getByCy('link').should('have.css', 'color', 'rgb(105, 80, 161)');
  });

  it('should circle has position: absolute', () => {
    cy.getByCy('circle').should('have.css', 'position', 'absolute');
  });

  it('should circle has top: -2rem', () => {
    cy.getByCy('circle').should('have.css', 'top', '-32px');
  });

  it('should circle has display: flex', () => {
    cy.getByCy('circle').should('have.css', 'display', 'flex');
  });

  it('should circle has justify-content: center', () => {
    cy.getByCy('circle').should('have.css', 'justify-content', 'center');
  });

  it('should circle has align-items: center', () => {
    cy.getByCy('circle').should('have.css', 'align-items', 'center');
  });

  it('should circle has background-color: purple-dark-secondary', () => {
    cy.getByCy('circle').should(
      'have.css',
      'background-color',
      'rgb(105, 80, 161)',
    );
  });

  it('should circle has border-radius: 50%', () => {
    cy.getByCy('circle').should('have.css', 'border-radius', '50%');
  });

  it('should circle has width: 4rem', () => {
    cy.getByCy('circle').should('have.css', 'width', '64px');
  });

  it('should circle has height: 4rem', () => {
    cy.getByCy('circle').should('have.css', 'height', '64px');
  });
});
