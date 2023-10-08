import styled from 'styled-components';

export const StepCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.125rem;
  width: 100%;
  padding: 9.75rem 8.5rem 11.875rem;

  .text-label {
    .text {
      justify-content: flex-start;
    }
  }

  .step-cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
