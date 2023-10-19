import * as S from './styles';

type LoadingSpinnerProps = {
  size?: number;
};

const LoadingSpinner = ({ size }: LoadingSpinnerProps) => (
  <S.Spinner data-cy="loading-spinner" size={size} />
);

export default LoadingSpinner;
