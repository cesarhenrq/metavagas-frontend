import { useNavigate } from 'react-router';

import Text from '@components/Text';
import Button from '@components/Button';
import { Telephone, Location, Message } from '@assets/db.icons';

import useUser from '@hooks/useUser';

import * as S from './styles';

const iconProps: IconProps = {
  width: 16,
  height: 16,
  fill: 'purple-dark',
};

const adressText = (
  <span>
    Av. do Contorno, 2905 Santa Efigênia, <br />
    Belo Horizonte - MG, 30110-080
  </span>
);

const Footer = () => {
  const { user } = useUser();

  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(path);
  };

  return (
    <S.Footer data-cy="footer" isButtonsVisible={Boolean(!user)}>
      <S.Line data-cy="line" />
      <div
        className="text-container"
        data-cy="logo"
        onClick={() => redirect('/')}
      >
        <Text label="meta" fontColor="white" fontSize="large" />
        <Text
          label="vagas"
          fontColor="yellow"
          fontStyle="italic"
          fontSize="large"
          fontWeight="600"
        />
      </div>
      <S.ContactInfo data-cy="contact-info">
        <Text label="Contato e Endereço" fontColor="yellow" />
        <S.ContactInfoItem
          data-cy="contact-info-phone"
          className="contact-info-item"
        >
          <S.Circle>
            <Telephone {...iconProps} />
          </S.Circle>
          <Text label="4003-5442" fontColor="white" />
        </S.ContactInfoItem>
        <S.ContactInfoItem data-cy="contact-info-email">
          <S.Circle>
            <Message {...iconProps} />
          </S.Circle>
          <Text label="contato@arnia.com.br" fontColor="white" />
        </S.ContactInfoItem>
        <S.ContactInfoItem data-cy="contact-info-adress">
          <S.Circle>
            <Location {...iconProps} />
          </S.Circle>
          <Text label={adressText} fontColor="white" data-cy="text-adress" />
        </S.ContactInfoItem>
      </S.ContactInfo>
      <div className="button-container" data-cy="auth-buttons">
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
    </S.Footer>
  );
};

export default Footer;
