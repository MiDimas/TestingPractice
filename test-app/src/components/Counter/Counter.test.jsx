import {fireEvent, render} from "@testing-library/react";
import Counter from "./Counter";
import {Provider} from "react-redux";
import {createReduxStore} from "../../store/store";
import {renderWithProvider} from "../../helpers/renderWithProvider";
import renderTestApp from "../../helpers/renderTestApp";

describe("Тестирование счетчика", () => {
    test("Инкремент", () => {
        const { getByTestId } = renderWithProvider(<Counter />)
        const incrementBtn = getByTestId("increment-btn");
        expect(getByTestId("value-title")).toHaveTextContent('0');
        fireEvent.click(incrementBtn);
        expect(getByTestId("value-title")).toHaveTextContent('1')
    });
    test("Декремент", () => {
        const { getByTestId } = renderWithProvider(<Counter />)
        const decrementBtn = getByTestId("decrement-btn");
        expect(getByTestId("value-title")).toHaveTextContent('0');
        fireEvent.click(decrementBtn);
        expect(getByTestId("value-title")).toHaveTextContent('-1')
    });
    test("Декремент с стартовым значением", () => {
        const { getByTestId } = renderTestApp(null, {
            route: '/',
            initialState: {
                counter: {value: 10}
            }
        })
        const decrementBtn = getByTestId("decrement-btn");
        expect(getByTestId("value-title")).toHaveTextContent('10');
        fireEvent.click(decrementBtn);
        expect(getByTestId("value-title")).toHaveTextContent('9')
    });
})