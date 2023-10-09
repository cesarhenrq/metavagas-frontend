import BaseCard from '@components/BaseCard';
import Text from '@components/Text';

import * as S from './styles';
import * as I from '@assets/db.icons';

type props = {
  location: string;
  technology: string;
  vacancyRole: string;
};

const VacancyCard = ({ location, technology, vacancyRole }: props) => {
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
            <Text label={`Localização: ${location}`} fontColor="dark-grey" />
          </div>
          <div className="text-container">
            <I.Computer fill="yellow" width={16} />
            <Text
              label={
                <p>
                  Tecnologia: <b>{technology}</b>
                </p>
              }
              fontColor="dark-grey"
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
