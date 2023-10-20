import Text from '@components/Text';
import * as S from './styles';

type props = {
  allVacancies: number;
  technology: string;
};

const VacanciesFound = ({ allVacancies, technology }: props) => {
  return (
    <S.Container>
      {technology && (
        <Text
          label={
            <p>
              Vagas em <b>{technology}</b>
            </p>
          }
          fontSize="large"
          fontColor="purple-dark"
        />
      )}

      <Text
        label={`${allVacancies} vagas encontradas`}
        fontSize="medium"
        fontColor="dark-gray"
      />
    </S.Container>
  );
};

export default VacanciesFound;
