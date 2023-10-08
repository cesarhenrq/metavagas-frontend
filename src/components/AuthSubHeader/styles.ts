import styled from 'styled-components';

export const AuthSubHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--purple-dark);
  padding: 6.25rem 8.4375rem;

  .text {
    justify-content: flex-start;
  }

  span {
    margin-bottom: 2rem;
  }

  .text-and-icon {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .first-text-and-icon {
    margin-bottom: 1rem;
  }
`;
