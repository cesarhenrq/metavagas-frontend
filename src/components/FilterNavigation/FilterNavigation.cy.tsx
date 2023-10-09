import { useState } from 'react';

import FilterNavigation from './FilterNavigation';
import GlobalStyle from '@styles/global';

const Sut = () => {
  const [activeTab, setActiveTab] = useState('technology');

  const handleTabClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;
    setActiveTab(id);
  };

  return (
    <div style={{ backgroundColor: '#1A1033', width: '900px' }}>
      <GlobalStyle />
      <FilterNavigation activeTab={activeTab} onClick={handleTabClick} />
    </div>
  );
};

describe('<FilterNavigation />', () => {
  beforeEach(() => {
    cy.mount(<Sut />);
  });

  it('should filter navigation has display: flex', () => {
    cy.getByCy('filter-navigation').should('have.css', 'display', 'flex');
  });

  it('should filter navigation has justify-content: space-between', () => {
    cy.getByCy('filter-navigation').should(
      'have.css',
      'justify-content',
      'space-between',
    );
  });

  it('should filter navigation has border-bottom: 1px solid var(--white)', () => {
    cy.getByCy('filter-navigation').should(
      'have.css',
      'border-bottom',
      '1px solid rgb(255, 255, 255)',
    );
  });

  it('should filter navigation has position: relative', () => {
    cy.getByCy('filter-navigation').should('have.css', 'position', 'relative');
  });

  it('should filter navigation item has display: flex', () => {
    cy.getByClassLike('filter-navigation-item').should(
      'have.css',
      'display',
      'flex',
    );
  });

  it('should filter navigation has justify-content: center', () => {
    cy.getByClassLike('filter-navigation-item').should(
      'have.css',
      'justify-content',
      'center',
    );
  });

  it('should filter navigation has align-items: center', () => {
    cy.getByClassLike('filter-navigation-item').should(
      'have.css',
      'align-items',
      'center',
    );
  });

  it('should filter navigation has justify-content: center', () => {
    cy.getByClassLike('filter-navigation-item').should(
      'have.css',
      'justify-content',
      'center',
    );
  });

  it('should filter navigation has gap: 0.5rem', () => {
    cy.getByClassLike('filter-navigation-item').should(
      'have.css',
      'gap',
      '8px',
    );
  });

  it('should filter navigation has padding: 1.5rem 3.75rem', () => {
    cy.getByClassLike('filter-navigation-item').should(
      'have.css',
      'padding',
      '24px 60px',
    );
  });

  it('should filter navigation has cursor: pointer', () => {
    cy.getByClassLike('filter-navigation-item').should(
      'have.css',
      'cursor',
      'pointer',
    );
  });

  it('should filter navigation has position: relative', () => {
    cy.getByClassLike('filter-navigation-item').should(
      'have.css',
      'position',
      'relative',
    );
  });

  it('should filter navigation has top: 1px', () => {
    cy.getByClassLike('filter-navigation-item').should(
      'have.css',
      'top',
      '1px',
    );
  });

  it('should filter navigation has z-index: 1', () => {
    cy.getByClassLike('filter-navigation-item').should(
      'have.css',
      'z-index',
      '1',
    );
  });

  it('should filter navigation tecnology active on mount', () => {
    cy.getByCy('filter-navigation-tecnology').should(
      'have.css',
      'border-bottom',
      '2px solid rgb(251, 176, 77)',
    );

    cy.getByCy('computer-icon-path').should(
      'have.css',
      'fill',
      'rgb(251, 176, 77)',
    );

    cy.contains('Tecnologia').should('have.css', 'color', 'rgb(251, 176, 77)');
  });

  it('should others filter navigation item is inactive on mount', () => {
    cy.getByCy('filter-navigation-location').should(
      'have.css',
      'border-bottom',
      '0px none rgb(0, 0, 0)',
    );

    cy.getByCy('location-icon-path').should(
      'have.css',
      'fill',
      'rgb(255, 255, 255)',
    );

    cy.contains('Cidades').should('have.css', 'color', 'rgb(255, 255, 255)');

    cy.getByCy('filter-navigation-job').should(
      'have.css',
      'border-bottom',
      '0px none rgb(0, 0, 0)',
    );

    cy.getByCy('suitcase-icon-path').should(
      'have.css',
      'fill',
      'rgb(255, 255, 255)',
    );

    cy.contains('Cargos').should('have.css', 'color', 'rgb(255, 255, 255)');
  });

  it('should active an inactive filter navigation item when click on it', () => {
    cy.getByCy('filter-navigation-location').click();

    cy.getByCy('filter-navigation-tecnology').should(
      'have.css',
      'border-bottom',
      '0px none rgb(0, 0, 0)',
    );

    cy.getByCy('computer-icon-path').should(
      'have.css',
      'fill',
      'rgb(255, 255, 255)',
    );

    cy.contains('Tecnologia').should('have.css', 'color', 'rgb(255, 255, 255)');

    cy.getByCy('filter-navigation-location').should(
      'have.css',
      'border-bottom',
      '2px solid rgb(251, 176, 77)',
    );

    cy.getByCy('location-icon-path').should(
      'have.css',
      'fill',
      'rgb(251, 176, 77)',
    );

    cy.contains('Cidades').should('have.css', 'color', 'rgb(251, 176, 77)');

    cy.getByCy('filter-navigation-job').should(
      'have.css',
      'border-bottom',
      '0px none rgb(0, 0, 0)',
    );

    cy.getByCy('suitcase-icon-path').should(
      'have.css',
      'fill',
      'rgb(255, 255, 255)',
    );

    cy.contains('Cargos').should('have.css', 'color', 'rgb(255, 255, 255)');
  });
});
