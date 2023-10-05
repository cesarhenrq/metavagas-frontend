import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  it('should not render with text "Buscas mais recentes" when search some location', () => {
    cy.mount(<SearchBar />);

    cy.get('input[placeholder="Localização"]').type('test');

    cy.contains('Buscar vagas').click();

    cy.contains('Buscas mais recentes').should('not.exist');
  });
});
