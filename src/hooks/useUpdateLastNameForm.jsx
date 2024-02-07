import { useState } from 'react';

export function useUpdateLastNameForm(callback){
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callback(value);
  };

  return {
    value,
    handleChange,
    handleSubmit,
  };
};