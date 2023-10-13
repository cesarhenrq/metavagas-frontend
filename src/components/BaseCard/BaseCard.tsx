import * as S from './styles';

const BaseCard = ({ onClick, children, ...styleProps }: BaseCardProps) => {
  return (
    <S.BaseCard
      {...styleProps}
      className="base-card"
      onClick={onClick}
      data-cy="base-card"
    >
      {children}
    </S.BaseCard>
  );
};

export default BaseCard;
