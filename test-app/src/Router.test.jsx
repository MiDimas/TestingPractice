import { render, screen} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
describe("Testing Router", () => {
    test("Test link transitions", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');
        await user.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
        await user.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });
    test("Test link transitions", () => {

        render(
            <MemoryRouter initialEntries={['/fdnvd']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId('error-page')).toBeInTheDocument();
    });

    test('Test users', () => {

    })
})