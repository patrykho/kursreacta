export const arabicToRoman = (arabic: number) => {
    let roman = '';
    if (arabic === 1) {
        roman = 'I';
    }
    if (arabic === 5) {
        roman = 'V';
    }
    return roman;
};
