import { useState } from 'react';

import { actions } from '@contexts/user';

import Text from '@components/Text';
import { DownArrow } from '@assets/db.icons';

import useUser from '@hooks/useUser';

import * as S from './styles';

const UserInfo = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { user, userDispatch } = useUser();

  const name = user?.name.split('@')[0] || '';

  const firstLetter = name.charAt(0).toUpperCase();
  const secondLetter = name.charAt(1).toUpperCase();

  const logout = () => {
    userDispatch(actions.removeUser());
  };

  return (
    <S.UserInfo data-cy="user-info">
      <S.Avatar data-cy="avatar">
        {firstLetter && secondLetter && firstLetter + secondLetter}
      </S.Avatar>
      <div className="text-and-icon">
        <Text label={name} fontColor="white" fontSize="medium" />
        <DownArrow
          fill="white"
          width={16}
          height={16}
          onClick={() => setShowOptions(!showOptions)}
        />
      </div>
      <S.Options isVisible={showOptions} data-cy="options">
        <div className="option" onClick={logout} data-cy="option">
          <Text label="Sair" fontColor="purple-dark" />
        </div>
      </S.Options>
    </S.UserInfo>
  );
};

export default UserInfo;
