import styled from 'styled-components';

export const FilterCardContainer = styled.div`
  background-color: var(--purple-dark);
  padding: 1.625rem 8.4375rem;
  padding-bottom: 4rem;

  .base-card {
    box-shadow: none;
  }

  .navigation-and-card {
    display: flex;
    justify-content: space-between;

    .text-and-navigation {
      .text {
        justify-content: flex-start;
      }
    }
  }

  .filter-cards {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 1.875rem;

    .filter-card {
      width: 16.875rem;
    }
  }
`;
