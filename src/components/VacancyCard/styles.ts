import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .text-container {
    display: flex;
    gap: 0.438rem;
  }

  b {
    font-weight: bold;
  }
`;

export const Link = styled.a`
  display: flex;
  gap: 0.438rem;
  text-decoration: none;
`;
