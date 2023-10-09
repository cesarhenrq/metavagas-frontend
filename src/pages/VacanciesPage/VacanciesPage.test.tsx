import { screen, render } from '@testing-library/react';

import VacanciesPage from './VacanciesPage';

import Sut from '@utils/helpers';

describe('<VacanciesPage />', () => {
  beforeEach(() => {
    render(
      <Sut>
        <VacanciesPage />
      </Sut>,
    );
  });

  it('should be defined', () => {
    screen.getByTestId('vacancies-page');
  });

  it('should render <SearchBar />', () => {
    screen.getByTestId('search-bar');
  });
});
