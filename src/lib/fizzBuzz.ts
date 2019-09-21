export const fizzBuzzs = (i: number): number | string => {
  let result = '';
  if (i % 3 === 0) {
    result += 'Fizz';
  }
  if (i % 5 === 0) {
    result += 'Buzz';
  }
  return result || i;
};

export const fib = (x: number): number => {
  return x <= 1 ? x : fib(x - 2) + fib(x - 1);
};

export const xxx = (str: string): string => {
  return str.split('').reduce((xyz, abc) => abc + xyz, '');
};
