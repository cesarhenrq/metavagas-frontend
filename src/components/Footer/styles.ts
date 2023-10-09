/* eslint-disable indent */
import styled from 'styled-components';

type FooterProps = {
  isButtonsVisible: boolean;
};

export const Footer = styled.footer<FooterProps>`
  position: relative;
  background-color: var(--purple-dark);
  padding: 4.375rem 8.4375rem 6.875rem 8.4375rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  .text {
    justify-content: flex-start;
  }

  .text-container {
    display: flex;
  }

  .button-container {
    visibility: ${({ isButtonsVisible }) =>
      isButtonsVisible ? 'visible' : 'hidden'};
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
  position: absolute;
  border: 1px solid var(--yellow);
  top: 0;
  left: 8.4375rem;
  right: 8.4375rem;
  width: calc(100% - 16.875rem);
  z-index: 1;
`;
