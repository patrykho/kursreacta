import React, {useState} from 'react';
import {arabicToRoman} from './arabicToRoman';

export const ArabicConverter = () => {
  const [roman, setRoman] = useState();
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value;
    setRoman(arabicToRoman(value));
  };
  return (
    <>
      <label>
        Arabic:<input onChange={handleChange} type='number'></input>
      </label>
      <h1>Roman: {roman}</h1>
    </>
  );
};
