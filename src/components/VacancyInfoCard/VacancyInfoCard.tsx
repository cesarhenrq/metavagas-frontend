import BaseCard from '@components/BaseCard';
import Text from '@components/Text';
import { userContext } from '@contexts/user';
import { useContext, useState } from 'react';

import * as S from './styles';
import * as I from '@assets/db.icons';

type props = {
  location: string;
  company: string;
  vacancyDescription: string;
  vacancyRole: string;
  vacancyType: string;
  wage: string;
  technologies: string[];
  advertiser: string;
  createdAt: string;
};

const VacancyInfoCard = ({
  location,
  company,
  vacancyDescription,
  vacancyRole,
  vacancyType,
  wage,
  technologies,
  createdAt,
  advertiser,
}: props) => {
  const { user } = useContext(userContext);
  const [expanded, setExpanded] = useState(false);

  const createdDate = new Date(createdAt);
  const day = createdDate.getDate();
  const month = createdDate
    .toLocaleDateString('pt-BR', { month: 'long' })
    .slice(0, 3);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <BaseCard onClick={toggleExpansion}>
      <S.Card isLogged={Boolean(user)}>
        <section className="text-date-container">
          <Text
            label={`${vacancyRole}`}
            fontColor="purple-dark"
            fontSize="medium"
            fontWeight="500"
          />

          <div className="date-container">
            <Text
              label={`${advertiser}`}
              fontColor="dark-gray"
              fontSize="small"
              fontWeight="bold"
            />
            <I.Circle fill="gray" width={5} />
            <Text
              label={`${day} ${month}`}
              fontColor="gray-medium"
              fontSize="small"
            />
          </div>
        </section>
        <Text
          label={`Empresa: ${company}`}
          fontColor="dark-gray"
          fontSize="small"
          className="company-text"
        />
        <S.CardTech>
          {technologies.map((tecnologia: string) => (
            <Text
              key={tecnologia}
              label={tecnologia}
              fontColor="purple-dark-secondary"
              fontSize="small"
              className="text-tecnologia"
            />
          ))}
        </S.CardTech>
        <section className="info-container">
          <div className="info-text">
            <I.Coin fill="yellow" width={16} />
            <Text
              label={
                <p>
                  Faixa salarial:
                  <b> R$ {wage}</b>
                </p>
              }
              fontColor="dark-gray"
              className="blur-text"
            />
          </div>
          <div className="info-text">
            <I.Location fill="yellow" width={16} />
            <Text
              label={
                <p>
                  localização:
                  <b> {location}</b>
                </p>
              }
              className="blur-text"
              fontColor="dark-gray"
            />
          </div>
          <div className="info-text">
            <I.Computer fill="yellow" width={16} />
            <Text
              label={
                <p>
                  Tipo de vaga:
                  <b> {vacancyType}</b>
                </p>
              }
              className="blur-text"
              fontColor="dark-gray"
            />
          </div>
        </section>
        <Text
          label={
            expanded
              ? vacancyDescription
              : `${vacancyDescription.slice(0, 260)}...`
          }
          fontColor="dark-gray"
          fontSize="small"
        />
      </S.Card>
    </BaseCard>
  );
};

export default VacancyInfoCard;
