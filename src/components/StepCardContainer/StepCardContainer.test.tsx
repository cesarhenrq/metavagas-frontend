import { render, screen } from '@testing-library/react';

import StepCardContainer from './StepCardContainer';

describe('<StepCardContainer />', () => {
  beforeEach(() => {
    render(<StepCardContainer />);
  });

  it('should be defined', () => {
    screen.getByTestId('step-card-container');
  });

  it('should render <Text />', () => {
    screen.getByTestId('text-label');
  });

  it('should render all <StepCard />', () => {
    screen.getAllByTestId('step-card');
  });
});
