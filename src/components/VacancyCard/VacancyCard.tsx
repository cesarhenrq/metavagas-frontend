import BaseCard from '@components/BaseCard';
import Text from '@components/Text';

import * as S from './styles';
import * as I from '@assets/db.icons';

type props = {
  location: string;
  technologies: string;
  vacancyRole: string;
};

const VacancyCard = ({ location, technologies, vacancyRole }: props) => {
  return (
    <BaseCard>
      <S.Card data-cy="vancacy-card">
        <Text
          label={`${vacancyRole}`}
          fontColor="purple-dark"
          fontSize="medium"
          fontWeight="500"
        />
        <S.Container>
          <div className="text-container">
            <I.Location fill="yellow" width={16} />
            <Text label={`Localização: ${location}`} fontColor="dark-gray" />
          </div>
          <div className="text-container">
            <I.Computer fill="yellow" width={16} />
            <Text
              label={
                <p>
                  Tecnologia: <b>{technologies}</b>
                </p>
              }
              fontColor="dark-gray"
            />
          </div>
          <S.Link href="/register" data-cy="link">
            <Text
              label="Ver mais detalhes"
              fontWeight="bold"
              fontColor="purple"
            />
            <I.SideArrow fill="purple" width={16} />
          </S.Link>
        </S.Container>
      </S.Card>
    </BaseCard>
  );
};

export default VacancyCard;
