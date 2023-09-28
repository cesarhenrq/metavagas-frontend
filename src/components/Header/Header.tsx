import Text from '@components/Text';
import Button from '@components/Button';

import * as S from './styles';

const Header = () => {
  const dummy = () => {
    console.log('first');
  };
  return (
    <S.Header>
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
          onClick={dummy}
          backgroundColor="purple-dark"
          fontColor="white"
          borderColor="white"
        />
        <Button
          label="Cadastrar-se gratuitamente"
          onClick={dummy}
          borderColor="yellow"
        />
      </div>
    </S.Header>
  );
};

export default Header;
