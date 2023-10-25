import BaseCard from '@components/BaseCard';
import Text from '@components/Text';
import useFilters from '@hooks/useFilters';

import * as S from './styles';
import * as I from '@assets/db.icons';
import useUser from '@hooks/useUser';
import { actions } from '@contexts/filters';

type props = {
  location: string;
  technologies: Technology[];
  vacancyRole: string;
  id: string;
};

const VacancyCard = ({ location, technologies, vacancyRole, id }: props) => {
  const { user } = useUser();
  const { filtersDispatch } = useFilters();

  const technologyElements = technologies
    .map((technology, index) => <b key={index}>{technology.techName}</b>)
    .slice(0, 1);

  const handleFilter = () => {
    filtersDispatch(actions.addId(id));
    filtersDispatch(actions.addLocation(location));
    filtersDispatch(actions.addTechnology(technologies[0].techName));
  };

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
          <S.Link
            onClick={user ? handleFilter : () => {}}
            to={user ? '/vacancies' : '/register'}
            data-cy="link"
          >
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
