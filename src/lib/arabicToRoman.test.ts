import {arabicToRoman} from './arabicToRoman';

describe('arabicToRoman(', () => {
  it.each([
    ['0', ''],
    ['1', 'I'],
    ['2', 'II'],
    ['3', 'III'],
    ['4', 'IV'],
    ['5', 'V'],
    ['6', 'VI'],
    ['7', 'VII'],
    ['8', 'VIII'],
    ['9', 'IX'],
    ['10', 'X'],
    ['11', 'XI'],
    ['16', 'XVI'],
    ['19', 'XIX'],
    ['25', 'XXV'],
    ['50', 'L'],
    ['99', 'IC'],
    // ['100', 'C'],
    // ['500', 'D'],
    // ['1000', 'M'],
  ])('case index %# converts %d to %s', (arabic, expecedRoman) => {
    //  @ts-ignore
    expect(arabicToRoman(arabic)).toEqual(expecedRoman);
  });
});
