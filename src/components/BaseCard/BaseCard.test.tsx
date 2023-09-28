/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';

import BaseCard from './BaseCard';

describe('<BaseCard />', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <BaseCard>
        <div>Test</div>
      </BaseCard>,
    ).container;
  });

  it('should be defined', () => {
    expect(container).toBeDefined();
  });

  it('should render with: background-color: white as default', () => {
    (expect as any)(container).toHaveStyle('background-color: + white');
  });

  it('should render with: padding: 2rem as default', () => {
    (expect as any)(container).toHaveStyle('padding: + 2rem');
  });

  it('should render with: border: 1px solid var(--gray) as default', () => {
    (expect as any)(container).toHaveStyle('border: + 1px solid var(--gray)');
  });

  it('should render children', () => {
    const element = screen.getByText('Test');

    expect(element).toBeDefined();
  });

  it('should render with: background-color: var(--purple) when prop is passed', () => {
    container = render(
      <BaseCard backgroundColor="purple">
        <div>Test</div>
      </BaseCard>,
    ).container;

    (expect as any)(container).toHaveStyle('background-color: + var(--purple)');
  });

  it('should render with: padding: var(--font-size-small) when prop is passed', () => {
    container = render(
      <BaseCard padding="small">
        <div>Test</div>
      </BaseCard>,
    ).container;

    (expect as any)(container).toHaveStyle('padding: + var(--font-size-small)');
  });

  it('should render with: border: 1px solid var(--purple) when prop is passed', () => {
    container = render(
      <BaseCard borderColor="purple">
        <div>Test</div>
      </BaseCard>,
    ).container;

    (expect as any)(container).toHaveStyle('border: + 1px solid var(--purple)');
  });
});
