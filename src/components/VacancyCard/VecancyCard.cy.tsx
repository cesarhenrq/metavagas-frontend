import VacacyCard from './VacancyCard';
import GlobalStyle from '@styles/global';

describe('', () => {
  it('should render with display:', () => {
    cy.mount(
      <>
        <GlobalStyle />
        <VacacyCard location={''} technologies={''} vacancyRole={''} />
      </>,
    );

    cy.getByCy('vancacy-card').should('have.css', 'display', 'flex');
  });

  it('', () => {
    cy.mount(
      <>
        <GlobalStyle />
        <VacacyCard location={''} technologies={''} vacancyRole={''} />
      </>,
    );

    cy.getByCy('link').should('have.css', 'color', 'rgb(0, 0, 238)');
  });
});
