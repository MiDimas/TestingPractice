import counterReducer, {decremented, incremented} from "./counterReducer";


describe("Тесты counterReducer", () => {
    test("Тестирование инкремента", () => {
        expect(counterReducer({value: 10}, incremented())).toEqual({value: 11});
    });
    test("Тестирование декремента", () => {
        expect(counterReducer({value: 10}, decremented())).toEqual({value: 9});
    });
    test("Тестирование с undefined значением стэйта", () => {
        expect(counterReducer(undefined, incremented())).toEqual({value: 1});
        expect(counterReducer(undefined, decremented())).toEqual({value: -1});
    });
})