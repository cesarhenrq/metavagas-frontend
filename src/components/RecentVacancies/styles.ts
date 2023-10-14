/* eslint-disable indent */
import styled from 'styled-components';

type props = {
  buttonVisible: boolean;
};

export const Container = styled.section<props>`
  margin: 134px;

  .vacancy-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .text-container {
    display: flex;
    margin-bottom: 32px;
  }

  .button-container {
    visibility: ${({ buttonVisible }) =>
      buttonVisible ? 'visible' : 'hidden'};
    display: flex;
    justify-content: center;
    margin-top: 48px;
  }

  @media (max-width: 1130px) {
    .vacancy-container {
      grid-template-columns: repeat(1, 1fr);
    }

    .text-container {
      display: flex;
      justify-content: center;
      margin-bottom: 32px;
    }
  }
`;
