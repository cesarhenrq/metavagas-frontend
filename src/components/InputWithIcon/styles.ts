import styled from 'styled-components/';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--gray-light);
  padding: 1rem;
  border-radius: 0.5rem;
  color: var(--purple-dark);
  background-color: var(--white);

  input {
    width: 100%;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  input::placeholder {
    color: var(--gray-light);
    font-style: italic;
  }

  svg {
    cursor: pointer;
  }
`;
