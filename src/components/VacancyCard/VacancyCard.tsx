import BaseCard from '@components/BaseCard';
import Text from '@components/Text';

import * as S from './styles';
import * as I from '@assets/db.icons';

const VancacyCard = () => {
  return (
    <BaseCard>
      <S.Card data-cy="vancacy-card">
        <Text
          label="Desenvolvedor de Sistemas Pleno"
          fontColor="purple-dark"
          fontSize="medium"
          fontWeight="500"
        />
        <S.Container>
          <div className="text-container">
            <I.Location fill="yellow" width={16} />
            <Text label="Localização: Betim - MG" fontColor="dark-grey" />
          </div>
          <div className="text-container">
            <I.Computer fill="yellow" width={16} />
            <Text
              label={
                <p>
                  Tecnologia: <b>Phyton</b>
                </p>
              }
              fontColor="dark-grey"
            />
          </div>
        </S.Container>
        <S.Link
          href="http://localhost:3000/__/#/specs/runner?file=src/components/VacancyCard/VecancyCard.cy.tsx"
          data-cy="link"
        >
          <Text
            label="Ver mais detalhes"
            fontWeight="bold"
            fontColor="purple"
          />
          <I.SideArrow fill="purple" width={16} />
        </S.Link>
      </S.Card>
    </BaseCard>
  );
};

export default VancacyCard;
