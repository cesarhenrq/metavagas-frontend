import Text from '@components/Text';
import * as S from './styles';
import * as I from '@assets/db.icons';

const SaveSearches = () => {
  return (
    <S.Container>
      <Text
        label={
          <p>
            Salve essa busca, te <b>avisaremos por e-mail</b> quando
            encontrarmos mais vagas
          </p>
        }
        fontSize="medium"
        fontColor="white"
      />

      <S.Button>
        <I.Save fill="yellow" width={24} />
        <Text
          label="Salvar busca"
          fontSize="normal"
          fontColor="white"
          fontWeight="500"
        />
      </S.Button>
    </S.Container>
  );
};

export default SaveSearches;
