import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: var(--white);
  box-shadow: 0px 1rem 2rem rgba(207.7, 207.7, 207.7, 0.2);
  border-radius: 1rem;

  .search-form {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 1rem;
    width: 100%;

    .input-with-icon {
      width: 100%;
    }

    .form-group {
      width: 38.46%;
      label {
        p {
          justify-content: flex-start;
          margin-bottom: 0.5rem;
        }
      }
    }

    button {
      padding: 0.75rem 1.4rem;
    }
  }

  .recent-search {
    display: flex;
    gap: 1rem;
    p {
      justify-content: flex-start;
    }

    button {
      padding: 0.625rem;
    }

    .search {
      display: flex;
      gap: 0.5rem;
    }
  }
`;
