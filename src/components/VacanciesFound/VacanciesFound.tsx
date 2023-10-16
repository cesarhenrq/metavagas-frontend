import Text from '@components/Text';
import * as S from './styles';

type props = {
  allVacancies: string;
};

const VacanciesFound = ({ allVacancies }: props) => {
  return (
    <S.Container>
      <Text
        label={
          <p>
            Vagas em <b>React</b>
          </p>
        }
        fontSize="large"
        fontColor="purple-dark"
      />
      <Text
        label={`${allVacancies} vagas encontradas`}
        fontSize="medium"
        fontColor="dark-gray"
      />
    </S.Container>
  );
};

export default VacanciesFound;
