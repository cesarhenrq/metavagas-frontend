import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  background-color: var(--purple-dark);
  padding: 1.625rem 8.4375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;

  .text-container {
    display: flex;
    cursor: pointer;
  }

  .button-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const Line = styled.hr`
  position: fixed;
  border: 1px solid black;
  top: calc(6.4375rem - 2px);
  left: 8.4375rem;
  right: 8.4375rem;
  width: calc(100% - 16.875rem);
  z-index: 3;
`;
