import {render} from "@testing-library/react";
import App from "../App";
import {MemoryRouter} from "react-router-dom";
import AppRouter from "../components/AppRouter/AppRouter";

export const renderWithRouter = (component, initial='/') => {
    return render(
        <MemoryRouter initialEntries={[initial]}>
            <AppRouter />
            {component}
        </MemoryRouter>
    )
}