import VancacyCard from './VacancyCard';
import GlobalStyle from '@styles/global';

describe('', () => {
  it('should render with display:', () => {
    cy.mount(
      <>
        <GlobalStyle />
        <VancacyCard />
      </>,
    );

    cy.getByCy('vancacy-card').should('have.css', 'display', 'flex');
  });

  it('', () => {
    cy.mount(
      <>
        <GlobalStyle />
        <VancacyCard />
      </>,
    );

    cy.getByCy('link').should('have.css', 'color', 'rgb(0, 0, 238)');
  });

  it('should redirect to page:', () => {
    cy.mount(
      <>
        <GlobalStyle />
        <VancacyCard />
      </>,
    );

    cy.getByCy('link').click();

    cy.url().should(
      'be.equal',
      'http://localhost:3000/__/#/specs/runner?file=src/components/VacancyCard/VecancyCard.cy.tsx',
    );
  });
});
