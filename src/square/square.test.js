const square = require('./square');

describe('square', () => {
    test("Мокаем метод pow", () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    })
    test("Проверка на не сработку метода pow", () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    })
    test('Корректное значение', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeUndefined();
    })
    afterEach(() => {
        jest.clearAllMocks();
    })
});