const validateValue = require("./validateValue");
describe('Тесты validateValue', () => {
    test("Значение внутри диапазона", () => {
        expect(validateValue(50)).toBe(true);
    })
    test("Значение на нижней границе диапазона", () => {
        expect(validateValue(0)).toBe(true);
    })
    test("Значение на верхней границе диапазона", () => {
        expect(validateValue(100)).toBe(true);
    })
    test("Значение вне диапазона", () => {
        expect(validateValue(1050)).toBe(false);
        expect(validateValue(-1050)).toBe(false)
    })
})