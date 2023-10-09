import { useState, ChangeEvent } from 'react';

type UseFieldResult = [
  {
    type: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    id: string;
  },
  () => void,
  React.Dispatch<React.SetStateAction<string>>,
];

const useField = (type: string, id: string): UseFieldResult => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return [
    {
      type,
      value,
      onChange,
      id,
    },
    reset,
    setValue,
  ];
};

export default useField;
