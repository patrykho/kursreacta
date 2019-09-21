import { fizzBuzzs, fib, xxx } from './fizzBuzz'
describe('test fizzBuzzs func', () => {
    it('given 3 should return Fizz', () => {
        expect(fizzBuzzs(3)).toBe("Fizz")
    });

    it('given 5 should return Buzz', () => {
        expect(fizzBuzzs(5)).toBe("Buzz")

    });
    it('given 15 should return Buzz', () => {
        expect(fizzBuzzs(15)).toBe("FizzBuzz")

    });
    it('given 0 should return Buzz', () => {
        expect(fizzBuzzs(0)).toBe("FizzBuzz")
    });

});

describe('test fib func', () => {
    it('should be 1', () => {
        expect(fib(1)).toBe(1)
    });

    it('should be 1', () => {
        expect(fib(2)).toBe(1)
    });

    it('should be 1 ', () => {
        expect(fib(2)).toBe(1)
    });

    it('should  be 2', () => {
        expect(fib(3)).toBe(2)
    });


    it('should  be 3', () => {
        expect(fib(4)).toBe(3)
    });

    it('should  be 5', () => {
        expect(fib(5)).toBe(5)
    });

    it('should  be 8', () => {
        expect(fib(6)).toBe(8)
    });

});

describe('test xxx this function inverting sting', () => {
    it('should be tap', () => {
        expect(xxx("pat")).toBe("tap")
    });

    it('should be nala ', () => {
        expect(xxx("alan")).toBe("nala")
    });
    it('should ', () => {
        expect(xxx("alkokian")).toBe("naikokla")
    });

});


