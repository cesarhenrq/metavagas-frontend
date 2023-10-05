import styled from 'styled-components';

export const RegisterCard = styled.div`
  margin-top: 2rem;
  width: 16.875rem;

  .base-card {
    padding-top: 2rem;
    position: relative;

    .text {
      a {
        color: var(--purple-dark-secondary);
      }
    }
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: -2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--purple-dark-secondary);
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
`;
