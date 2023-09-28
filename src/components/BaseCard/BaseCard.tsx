import * as S from './styles';

const BaseCard = ({ children, ...styleProps }: BaseCardProps) => {
  return (
    <S.BaseCard {...styleProps} className="base-card">
      {children}
    </S.BaseCard>
  );
};

export default BaseCard;
