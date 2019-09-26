export const arabicToRoman = (arabic: string) => {
  const romanTenArray: Array<string> = ['I', 'V', 'X'];
  const romanHundredArray: Array<string> = ['X', 'L', 'C'];
  const romanThousandArray: Array<string> = ['C', 'D', 'M'];
  const romanTenThousand: Array<string> = ['M', 'ↁ', 'ↂ'];

  const arabicToRoman = (numberString: string, arraySymbol: Array<string>) => {
    const number = parseInt(numberString, 10);
    let word = '';
    if (number >= 1 && number <= 3) {
      word = arraySymbol[0].repeat(number);
    } else if (number === 4) {
      word = arraySymbol[0] + arraySymbol[1];
    } else if (number === 5) {
      word = arraySymbol[1];
    } else if (number >= 6 && number <= 8) {
      word = arraySymbol[1] + arraySymbol[0].repeat(number - 5);
    } else if (number === 9) {
      word = arraySymbol[0] + arraySymbol[2];
    }
    return word;
  };

  let roman = '';
  const stringArabicToArray = arabic.split('').reverse();
  if (stringArabicToArray.length >= 4) {
    roman += arabicToRoman(stringArabicToArray[3], romanTenThousand);
  }
  if (stringArabicToArray.length >= 3) {
    roman += arabicToRoman(stringArabicToArray[2], romanThousandArray);
  }
  if (stringArabicToArray.length >= 2) {
    roman += arabicToRoman(stringArabicToArray[1], romanHundredArray);
  }
  if (stringArabicToArray.length >= 1) {
    roman += arabicToRoman(stringArabicToArray[0], romanTenArray);
  }

  return roman;
};
