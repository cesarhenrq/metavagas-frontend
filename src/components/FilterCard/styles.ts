import styled from 'styled-components';

export const FilterCard = styled.div`
  .base-card {
    align-items: center;
    justify-content: space-between;

    .icon:hover {
      cursor: pointer;
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
