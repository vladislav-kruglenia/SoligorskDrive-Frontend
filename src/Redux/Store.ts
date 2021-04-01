import {combineReducers, configureStore, Store} from "@reduxjs/toolkit";
import {AppStateType} from "../AppGlobal/AppGlobalTypes/Types";


export const reducers = combineReducers({});

export const store:Store<AppStateType> = configureStore({
    reducer: reducers
});