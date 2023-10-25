import BaseCard from '@components/BaseCard';
import Text from '@components/Text';

import * as S from './styles';
import * as I from '@assets/db.icons';
import useUser from '@hooks/useUser';

type props = {
  location: string;
  technologies: Technology[];
  vacancyRole: string;
};

const VacancyCard = ({ location, technologies, vacancyRole }: props) => {
  const { user } = useUser();

  const technologyElements = technologies
    .map((technology, index) => <b key={index}>{technology.techName}</b>)
    .slice(0, 1);

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
                  Tecnologia: <b>{technologyElements}</b>
                </p>
              }
              fontColor="dark-gray"
            />
          </div>
          <S.Link href={user ? '/vacancies' : '/register'} data-cy="link">
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
