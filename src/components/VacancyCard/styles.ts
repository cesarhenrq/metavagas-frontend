import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .text {
    justify-content: flex-start;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .text-container {
    display: flex;
    margin-bottom: 0.75rem;
    gap: 0.438rem;
  }

  b {
    font-weight: bold;
  }
`;

export const Link = styled(RouterLink)`
  display: flex;
  text-decoration: none;
`;
