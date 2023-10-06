import { useNavigate } from 'react-router-dom';

import Text from '@components/Text';
import Button from '@components/Button';

import * as S from './styles';

const Header = () => {
  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(path);
  };
  return (
    <>
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
        <div className="button-container">
          <Button
            label="Entrar"
            onClick={() => redirect('/login')}
            backgroundColor="purple-dark"
            fontColor="white"
            borderColor="white"
          />
          <Button
            label="Cadastrar-se gratuitamente"
            onClick={() => redirect('/register')}
            borderColor="yellow"
          />
        </div>
      </S.Header>
      <S.Line />
    </>
  );
};

export default Header;
