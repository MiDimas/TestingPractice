import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducers/rootReducer";


export const createReduxStore = (initialState={}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
}