import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import Text from '@components/Text';
import Button from '@components/Button';
import UserInfo from '@components/UserInfo';

import { userContext } from '@contexts/user';

import * as S from './styles';

const Header = () => {
  const { user } = useContext(userContext);

  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(path);
  };
  return (
    <S.Header data-cy="header">
      <div className="text-container">
        <Text label="meta" fontColor="white" fontSize="large" />
        <Text
          label="vagas"
          fontColor="yellow"
          fontStyle="italic"
          fontSize="large"
          fontWeight="600"
        />
      </div>
      {user ? (
        <UserInfo />
      ) : (
        <div className="button-container">
          <Button
            label="Entrar"
            onClick={() => redirect('/login')}
            backgroundColor="purple-dark"
            fontColor="white"
            borderColor="white"
            fontWeight="500"
          />
          <Button
            label="Cadastrar-se gratuitamente"
            onClick={() => redirect('/register')}
            borderColor="yellow"
            fontWeight="500"
          />
        </div>
      )}
      <S.Line />
    </S.Header>
  );
};

export default Header;
