import {fireEvent, getByTestId, render, screen} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import {renderWithRouter} from "./helpers/renderWithRouter";
import UsersPage from "./pages/UsersPage/UsersPage";
import axios from "axios";

jest.mock('axios');

describe("Testing Router", () => {
    let response;

    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                }
            ]
        }
    });
    afterEach(() => jest.clearAllMocks() )

    test("Test link transitions", () => {

        render(
            <MemoryRouter initialEntries={['/fdnvd']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId('error-page')).toBeInTheDocument();
    });

    test('Test users', async () => {
        axios.get.mockReturnValue(response);
        renderWithRouter(<UsersPage />);
        const users = await screen.findAllByTestId('user-item');
        fireEvent.click(users[0]);
        expect(screen.getByTestId("user-detail")).toBeInTheDocument();
    })
})