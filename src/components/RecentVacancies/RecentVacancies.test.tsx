import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import RecentVacancies from './RecentVacancies';
import Sut from '@utils/helpers/Sut';

describe('VancancyCard component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <Sut>
        <RecentVacancies />
      </Sut>,
    ).container;
  });

  it('should be defined', () => {
    expect(container).toBeDefined();
  });

  it('to be render recentVacanciesTitle', () => {
    screen.getByText('Vagas mais recentes');
  });

  it('to be render register', () => {
    screen.getByText('Cadastre-se para ver mais vagas');
  });
});
