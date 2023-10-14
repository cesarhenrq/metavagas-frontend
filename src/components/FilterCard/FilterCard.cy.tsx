import FilterCard from './FilterCard';
import GlobalStyle from '@styles/global';

describe('<FilterCard />', () => {
  beforeEach(() => {
    const filterCardPropsMock = {
      filter: 'JavaScript',
      onClick: cy.stub().as('onClickMock'),
    };

    cy.mount(
      <>
        <GlobalStyle />
        <FilterCard {...filterCardPropsMock} />
      </>,
    );
  });

  it('should render base card with align-items: center', () => {
    cy.getByCy('base-card').should('have.css', 'align-items', 'center');
  });

  it('should render base card with justify-content: space-between', () => {
    cy.getByCy('base-card').should(
      'have.css',
      'justify-content',
      'space-between',
    );
  });

  it('should text container has diplay: flex', () => {
    cy.getByCy('text-container').should('have.css', 'display', 'flex');
  });

  it('should text container has flex-direction: column', () => {
    cy.getByCy('text-container').should('have.css', 'flex-direction', 'column');
  });

  it('should text container has align-items: flex-start', () => {
    cy.getByCy('text-container').should(
      'have.css',
      'align-items',
      'flex-start',
    );
  });

  it('should onClick be called when click on arrow', () => {
    cy.getByCy('arrow').click();
    cy.get('@onClickMock').should('be.called');
  });
});
