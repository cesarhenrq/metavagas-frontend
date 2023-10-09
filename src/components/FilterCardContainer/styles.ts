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
      width: 68.4%;

      .text {
        justify-content: flex-start;
      }
    }
  }

  .filter-cards {
    display: grid;
    grid-template-columns: repeat(4, minmax(23.1%, 1fr));
    grid-gap: 1.875rem;
    margin-top: 1.875rem;
  }

  @media (max-width: 1300px) {
    .filter-cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .filter-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .filter-cards {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
