import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  background-color: var(--purple-dark);
  padding: 1.625rem 8.4375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;

  .text-container {
    display: flex;
  }

  .button-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;
