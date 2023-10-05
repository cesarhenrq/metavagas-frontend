import * as S from './styles';

const Text = (props: TextProps) => {
  return (
    <S.Text {...props} className="text" data-cy="text">
      {props.label}
    </S.Text>
  );
};

export default Text;
