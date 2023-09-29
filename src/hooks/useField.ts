import { useState, ChangeEvent } from 'react';

const useField = (type: string, name: string) => {
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
      name,
    },
    reset,
  ];
};

export default useField;
