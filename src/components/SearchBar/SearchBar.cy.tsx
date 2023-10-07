import SearchBar from './SearchBar';

import GlobalStyle from '@styles/global';

import { BrowserRouter } from 'react-router-dom';

import FiltersProvider from '@contexts/filters';

describe('<SearchBar />', () => {
  it('should not render with text "Buscas mais recentes" when search some location', () => {
    cy.mount(
      <>
        <GlobalStyle />
        <FiltersProvider>
          <BrowserRouter>
            <SearchBar />
          </BrowserRouter>
        </FiltersProvider>
      </>,
    );

    cy.get('input[placeholder="Localização"]').type('test');

    cy.contains('Buscar vagas').click();

    cy.contains('Buscas mais recentes').should('not.exist');
  });
});
