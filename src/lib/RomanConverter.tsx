import React, {useState} from 'react';
export const RomanConverter = () => {
  const [roman, setRoman] = useState();
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = parseInt(event.currentTarget.value, 10);
    let roman = 'I';
    if (value === 5) {
      roman = 'V';
    }
    if (value === 0) {
      roman = '';
    }
    setRoman(roman);
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
