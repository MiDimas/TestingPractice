const arrToString = require('./arrToString');

describe("arrToString тестирование", () =>{
    test("Численные значения", () =>{
        expect(arrToString([1, 2, 3])).toEqual(['1', '2', '3']);
    });
    test("Смешанные значения", () =>{
        expect(arrToString(["string", 1, 2, 3, 'fgdfjfd', null, undefined, false])).toEqual(['1', '2', '3']);
    });
    test("Пустой массив", () =>{
        expect(arrToString([])).toEqual([]);
    });
    test("Отрицание равенства", () =>{
        !expect(arrToString([1, 2, "3"])).not.toEqual(["1", "2", "3"]);
    });

});