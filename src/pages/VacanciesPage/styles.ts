import styled from 'styled-components';

export const VacanciesPage = styled.div`
  .search-bar {
    border-radius: 0;
    background-color: var(--purple-dark);
    padding: 3.4375rem 12.4375rem 2.5rem 8.4375rem;

    label {
      .text {
        color: var(--white);
        font-weight: 400;
      }
    }
  }
`;

export const Charts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 3rem 8.4375rem;
`;

export const Vacancies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const VacancyChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;
