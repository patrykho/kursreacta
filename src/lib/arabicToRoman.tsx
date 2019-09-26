export const arabicToRoman = (arabic: string) => {
  const arabicTenArray: Array<string> = ['I', 'V', 'X'];
  const arabicHundredArray: Array<string> = ['X', 'L', 'C'];
  const arabicThousandArray: Array<string> = ['X', 'L', 'C'];

  const arabicTen = (numberString: string, arraySymbol: Array<string>) => {
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

  if (stringArabicToArray.length >= 2) {
    roman += arabicTen(stringArabicToArray[1], arabicHundredArray);
  }
  if (stringArabicToArray.length >= 1) {
    roman += arabicTen(stringArabicToArray[0], arabicTenArray);
  }

  return roman;
};
