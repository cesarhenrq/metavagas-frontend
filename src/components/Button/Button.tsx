import Text from '@components/Text';

import * as S from './styles';

const Button = ({ onClick, ...rest }: ButtonProps) => {
  return (
    <S.Button {...rest} onClick={onClick}>
      <Text {...rest} />
    </S.Button>
  );
};

export default Button;
