import {fireEvent, render} from "@testing-library/react";
import Counter from "./Counter";
import {Provider} from "react-redux";
import {createReduxStore} from "../../store/store";

describe("Тестирование счетчика", () => {
    test("Инкремент", () => {
        const { getByTestId } = render(
            <Provider store={createReduxStore()}>
                <Counter />
            </Provider>
        );
        const incrementBtn = getByTestId("increment-btn");
        expect(getByTestId("value-title")).toHaveTextContent('0');
        fireEvent.click(incrementBtn);
        expect(getByTestId("value-title")).toHaveTextContent('1')
    })
})