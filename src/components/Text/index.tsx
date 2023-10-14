import * as S from './styles';

const Text = ({ className, ...props }: TextProps) => {
  return (
    <S.Text {...props} className={`text ${className}`} data-cy="text">
      {props.label}
    </S.Text>
  );
};

export default Text;
