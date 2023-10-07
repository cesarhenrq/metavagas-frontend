describe('MetaVagas App', () => {
  const clickTestsHelper = [
    { whereToClick: 'Tecnologia', whatToExpect: 'filter-cards-technology' },
    { whereToClick: 'Cargos', whatToExpect: 'filter-cards-roles' },
    { whereToClick: 'Cidades', whatToExpect: 'filter-cards-location' },
  ];

  describe('Home Page', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should navigate to login page when click on "Entrar" in header', () => {
      cy.getByCy('header').contains('Entrar').click();
      cy.location('pathname').should('eq', '/login');
    });

    it('should navigate to register page when click on "Cadastrar-se gratuitamente" in header', () => {
      cy.getByCy('header').contains('Cadastrar-se gratuitamente').click();
      cy.location('pathname').should('eq', '/register');
    });

    it('should navigate to login page when click on "Entrar" in footer', () => {
      cy.getByCy('footer').contains('Entrar').click();
      cy.location('pathname').should('eq', '/login');
    });

    it('should navigate to register page when click on "Cadastrar-se gratuitamente" in footer', () => {
      cy.getByCy('footer').contains('Cadastrar-se gratuitamente').click();
      cy.location('pathname').should('eq', '/register');
    });

    it('should navigate to register page when click on "cadastro gratuito"', () => {
      cy.getByCy('register-card')
        .contains('cadastro gratuito')
        .click({ force: true });
      cy.location('pathname').should('eq', '/register');
    });

    clickTestsHelper.forEach(({ whereToClick, whatToExpect }) => {
      it(`should navigate to ${whereToClick} page when click on ${whereToClick}`, () => {
        cy.getByCy('filter-card-container').contains(whereToClick).click();
        cy.getByCy(whatToExpect).should('exist');
      });
    });
  });
});
