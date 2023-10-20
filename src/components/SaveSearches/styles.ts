/* eslint-disable indent */
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 1.5rem;
  padding-top: 2.5rem;

  b {
    font-weight: bold;
    font-style: italic;
  }

  .text {
    justify-content: flex-start;
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 0.5rem;
  background-color: var(--purple-dark-secondary);
  border-radius: 0.5rem;
  padding: 0.5rem 0.625rem;
`;
