import {getCounterValue} from "./getCounterValue";

describe('Тестирование селектора getCounterValue', () => {
    test("Тестирование с пустым стэйтом", () => {
        expect(getCounterValue({})).toBe(0);
    });

    test("", () => {
        expect(getCounterValue({
            counter: {
                value: 10,
            }
        })).toBe(10)
    });
})