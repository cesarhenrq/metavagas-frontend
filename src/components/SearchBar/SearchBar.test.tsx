/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from '@testing-library/react';
import { expect, jest } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';

import SearchBar from './SearchBar';

import Sut from '@utils/helpers';

describe('<SearchBar />', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <Sut>
        <SearchBar />
      </Sut>,
    ).container;

    jest.resetAllMocks();
  });

  it('should render the component', () => {
    expect(container).toBeDefined();
  });

  it('should render with the text "O quê você procura?"', () => {
    (expect as any)(container).toHaveTextContent('O quê você procura?');
  });

  it('should render with the text "Onde?"', () => {
    (expect as any)(container).toHaveTextContent('Onde?');
  });
});
