import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UserInfo from './UserInfo';

import Sut from '@utils/helpers';

describe('<UserInfo/>', () => {
  beforeEach(() => {
    render(
      <Sut>
        <UserInfo />
      </Sut>,
    );
  });

  it('should be defined', () => {
    screen.getByTestId('user-info');
  });

  it('should render <Avatar />', () => {
    screen.getByTestId('avatar');
  });

  it('should render <DownArrow />', () => {
    screen.getByTestId('down-arrow-icon');
  });

  it('should <Options /> be visible when click on <DownArrow />', async () => {
    const downArrow = screen.getByTestId('down-arrow-icon');
    await userEvent.click(downArrow);

    screen.getByTestId('options');
  });
});
