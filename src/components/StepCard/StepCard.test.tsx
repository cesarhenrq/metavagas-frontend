import { render, screen } from '@testing-library/react';

import StepCard from './StepCard';

const propsMock = {
  step: '01',
  title: 'Crie sua conta',
  description:
    'Lorem ipsum dolor sit amet consectetur. Nec nunc scelerisque nulla mauris.',
};

describe('<StepCard />', () => {
  beforeEach(() => {
    render(<StepCard {...propsMock} />);
  });

  it('should be defined', () => {
    screen.getByTestId('step-card');
  });

  it('should render <BaseCard />', () => {
    screen.getByTestId('base-card');
  });

  for (const prop in propsMock) {
    it(`should render ${prop} correctly`, () => {
      screen.getByText(propsMock[prop as keyof typeof propsMock]);
    });
  }
});
