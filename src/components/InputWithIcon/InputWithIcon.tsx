import { useRef } from 'react';

import * as S from './styles';

import { Magnifier, Location } from '@assets/db.icons';

type InputWithIconProps = {
  icon: 'magnifier' | 'location';
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
};

const InputWithIcon = ({
  icon,
  placeholder,
  ...inputProps
}: InputWithIconProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const activeInput = () => {
    inputRef.current?.focus();
  };

  return (
    <S.Container className="input-with-icon">
      {icon === 'magnifier' ? (
        <Magnifier fill="gray" width={24} height={24} onClick={activeInput} />
      ) : (
        <Location fill="gray" width={24} height={24} onClick={activeInput} />
      )}
      <input placeholder={placeholder} ref={inputRef} {...inputProps} />
    </S.Container>
  );
};

export default InputWithIcon;
