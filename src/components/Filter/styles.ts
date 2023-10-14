import styled from 'styled-components';

type FilterProps = {
  visibleTechCount: number;
};

export const Filter = styled.div<FilterProps>`
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid var(--gray-light);
  box-shadow: 0px 15px 35px rgba(207.7, 207.7, 207.7, 0.2);
  height: ${({ visibleTechCount }) =>
    visibleTechCount === 8 ? '1174px' : 'auto'};

  .text {
    justify-content: flex-start;
  }

  button {
    width: 100%;

    .text {
      justify-content: center;
    }
  }
`;

export const Reset = styled.div`
  font-size: var(--font-size-xsmall);
  color: var(--purple-dark-secondary);
  text-decoration: underline;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const Filters = styled.div`
  label {
    font-size: var(--font-size-small);
  }

  input[type='checkbox'] {
    width: 1.125rem;
    height: 1.125rem;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.875rem;
`;

export const FilterType = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const RangeContainer = styled.div`
  display: flex;
  gap: -1rem;
  margin-top: 0.875rem;
  background: var(--purple-dark-secondary);
  height: 3px;

  input[type='range'] {
    width: 100%;
    -webkit-appearance: none;
    background: var(--purple-dark-secondary);
    border-radius: 10px;
    height: 3px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 1rem;
      height: 1rem;
      border: 2px solid var(--purple-dark-secondary);
      background: var(--white);
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;

export const ShowOrHide = styled.div`
  margin-top: 0.5rem;
  color: #004ce8;
  font-size: var(--font-size-xsmall);
  cursor: pointer;
`;
