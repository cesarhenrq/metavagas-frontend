/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import VacancyInfoCard from './VacancyInfoCard';

describe('VancancyCard component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <VacancyInfoCard
        location={'Betim-MG'}
        company={'Izap'}
        vacancyDescription={'Lorem Ipsum is simply a dummy text'}
        vacancyRole={'Desenvolvedor Front-end'}
        vacancyType={'Home Office'}
        wage={'4000'}
        technologies={['React', 'PHP', 'Java']}
        advertiser={'Marcos'}
        createdAt={'12/10/2023'}
      />,
    ).container;
  });

  it('should be defined', () => {
    expect(container).toBeDefined();
  });
  it('to be render location', () => {
    const location = screen.getByText('Betim-MG');
    (expect as any)(location).toBeInTheDocument();
  });
  it('to be render vacancyRole', () => {
    const vacancyRole = screen.getByText('Desenvolvedor Front-end');
    (expect as any)(vacancyRole).toBeInTheDocument();
  });
  it('to be render vacancyType', () => {
    const vacancyType = screen.getByText('Home Office');
    (expect as any)(vacancyType).toBeInTheDocument();
  });
  it('to be render advertiser', () => {
    const advertiser = screen.getByText('Marcos');
    (expect as any)(advertiser).toBeInTheDocument();
  });
});
