import styled from 'styled-components';

export const SubHeader = styled.header`
  background-color: var(--purple-dark);
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 8.438rem;
  align-items: center;

  .text-container {
    width: 25rem;
  }

  .text-top {
    display: flex;
    width: 25rem;
  }

  b {
    color: var(--white);
  }

  @media (max-width: 78.75rem) {
    flex-direction: column;

    .text-container {
      width: 45rem;
    }

    .text-top {
      width: 45rem;
    }
  }

  @media (max-width: 48.75rem) {
    .header-person {
      width: 38.75rem;
    }
    .text-container {
      width: 30rem;
      text-align: center;
    }
    .text-top {
      width: 30rem;
      text-align: center;
    }
  }
`;
