import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./reducers/counterReducer";
import {rootReducer} from "./reducers/rootReducer";


export const store = configureStore({
    reducer: rootReducer
})