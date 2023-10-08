import styled from 'styled-components';

export const StepCard = styled.div`
  .base-card {
    padding: 2rem 1.5rem;
    flex-direction: column;
    width: 100%;

    :nth-child(1) {
      margin-bottom: 0.875rem;
    }

    :nth-child(2) {
      margin-bottom: 2rem;
    }

    .text {
      justify-content: flex-start;
    }
  }
`;
