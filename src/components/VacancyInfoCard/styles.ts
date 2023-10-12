import styled from 'styled-components';
type CardProps = {
  isLogged: boolean;
};
export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  .text {
    justify-content: left;
  }

  .company-text {
    justify-content: left;
    filter: ${({ isLogged }) => (isLogged ? 'blur(0)' : 'blur(3.5px)')};
  }

  .text-date-container {
    display: flex;
    justify-content: space-between;
  }
  .date-container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  .info-container {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.5rem;
  }

  .info-text {
    display: flex;
    gap: 0.438rem;
  }

  .blur-text {
    filter: ${({ isLogged }) => (isLogged ? 'blur(0)' : 'blur(3.5px)')};
  }

  b {
    font-weight: bold;
  }
`;

export const CardTech = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  margin-bottom: 2rem;

  .text-tecnologia {
    border: 1px solid var(--purple-dark-secondary);
    border-radius: 0.688rem;
    padding: 0.313rem 1.5rem;
  }
`;
