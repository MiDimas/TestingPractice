import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import AppRouter from "../components/AppRouter/AppRouter";
import {MemoryRouter} from "react-router-dom";
import {createReduxStore} from "../store/store";

const renderTestApp = (component= null, options = { route: '/',initialState: undefined}) => {
    const store = createReduxStore(options?.initialState);
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[options?.route]}>
                <AppRouter />
                {component}
            </MemoryRouter>
        </Provider>
    );
};

export default renderTestApp;