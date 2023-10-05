import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: var(--purple-dark);
  padding: 4.375rem 8.4375rem 6.875rem 8.4375rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100vw;

  .text {
    justify-content: flex-start;
  }

  .text-container {
    display: flex;
  }

  .button-container {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContactInfoItem = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: var(--yellow);
`;

export const Line = styled.hr`
  border: 1px solid var(--yellow);
  margin: 0 8.4375rem;
`;
