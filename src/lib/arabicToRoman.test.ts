import {arabicToRoman} from './arabicToRoman';

describe('arabicToRoman(', () => {
  it.each([[0, ''], [1, 'I'], [5, 'V']])(
    'case index %# converts %d to %s',
    (arabic, expecedRoman) => {
      //  @ts-ignore
      expect(arabicToRoman(arabic)).toEqual(expecedRoman);
    },
  );
});
