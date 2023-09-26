import * as S from './styles';

const Text = (props: TextProps) => {
  return <S.Text {...props}>{props.label}</S.Text>;
};

export default Text;
