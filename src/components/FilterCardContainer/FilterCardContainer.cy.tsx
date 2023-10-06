import FilterCardContainer from './FilterCardContainer';
import GlobalStyle from '@styles/global';

const clickTestHelper = [
  {
    whereToClick: 'Cidades',
    whatToExpect: 'filter-cards-location',
  },
  { whereToClick: 'Cargos', whatToExpect: 'filter-cards-roles' },
  { whereToClick: 'Tecnologia', whatToExpect: 'filter-cards-technology' },
];

const Sut = () => (
  <>
    <GlobalStyle />
    <FilterCardContainer />
  </>
);

describe('<FilterCardContainer />', () => {
  beforeEach(() => {
    cy.mount(<Sut />);
  });

  it('should has background-color: var(--purple-dark)', () => {
    cy.getByCy('filter-card-container').should(
      'have.css',
      'background-color',
      'rgb(26, 16, 51)',
    );
  });

  it('should has padding: 26px 135px 64px', () => {
    cy.getByCy('filter-card-container').should(
      'have.css',
      'padding',
      '26px 135px 64px',
    );
  });

  it('should base-card has box-shadow: none', () => {
    cy.getByCy('base-card').should('have.css', 'box-shadow', 'none');
  });

  it('should navigation and card wrapper has display: flex', () => {
    cy.getByCy('navigation-and-card').should('have.css', 'display', 'flex');
  });

  it('should navigation and card wrapper has justify-content: space-between', () => {
    cy.getByCy('navigation-and-card').should(
      'have.css',
      'justify-content',
      'space-between',
    );
  });

  it('should text "Vagas de emprego em todo Brasil" has justify-content: flex-start', () => {
    cy.contains('Vagas de emprego em todo Brasil').should(
      'have.css',
      'justify-content',
      'flex-start',
    );
  });

  it('should filter cards wrapper has display: flex', () => {
    cy.getByClassLike('filter-cards').should('have.css', 'display', 'flex');
  });

  it('should filter cards wrapper has gap: 1.5rem', () => {
    cy.getByClassLike('filter-cards').should('have.css', 'gap', '24px');
  });

  it('should filter cards wrapper has flex-wrap: wrap', () => {
    cy.getByClassLike('filter-cards').should('have.css', 'flex-wrap', 'wrap');
  });

  it('should filter cards wrapper has margin-top: 1.875rem', () => {
    cy.getByClassLike('filter-cards').should('have.css', 'margin-top', '30px');
  });

  it('should filter card has width: 16.875rem', () => {
    cy.getByCy('filter-card').should('have.css', 'width', '213px');
  });

  clickTestHelper.forEach(helper => {
    it(`should show ${helper.whatToExpect} when click on ${helper.whereToClick}`, () => {
      cy.contains(helper.whereToClick).click();
      cy.getByCy(helper.whatToExpect).should('be.visible');
    });
  });
});
