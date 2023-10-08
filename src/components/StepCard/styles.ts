import styled from 'styled-components';

export const StepCard = styled.div`
  display: flex;
  width: 31.75%;

  .base-card {
    padding: 2rem 1.5rem;
    flex-direction: column;

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
