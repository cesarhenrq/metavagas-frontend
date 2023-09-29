import Text from '@components/Text';
import HeaderPerson from '../../assets/HeaderPerson.png';

import * as S from './styles';

const SubHeader = () => {
  return (
    <S.SubHeader>
      <div className="text-container">
        <Text
          label="MAIS DE 12.000 VAGAS DE TECNOLOGIA, REUNIDAS EM UM SÓ LUGAR"
          fontColor="white"
          fontSize="medium"
        />
        <div className="text-top">
          <Text
            label={
              <p>
                Encontre a sua vaga de <b>react</b>
              </p>
            }
            fontColor="yellow"
            fontSize="xlarge"
            fontWeight="600"
          />
        </div>
      </div>
      <img
        src={HeaderPerson}
        alt="homem sorrindo, com camisa da arnia e segurando um notebook"
        className="header-person"
      />
    </S.SubHeader>
  );
};

export default SubHeader;
