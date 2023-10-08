import SearchBar from './SearchBar';

import Sut from '@utils/helpers';

describe('<SearchBar />', () => {
  it('should not render with text "Buscas mais recentes" when search some location', () => {
    cy.mount(
      <Sut>
        <SearchBar />
      </Sut>,
    );

    cy.get('input[placeholder="Localização"]').type('test');

    cy.contains('Buscar vagas').click();

    cy.contains('Buscas mais recentes').should('not.exist');
  });
});
