import {combineReducers, configureStore, getDefaultMiddleware, Store} from "@reduxjs/toolkit";
import {AppStateType} from "../AppGlobal/AppGlobalTypes/Types";
import orderFormReducer from "./OrderForm/OrderForm.reducer"


export const reducers = combineReducers({
    orderForm: orderFormReducer
});

export const store:Store<AppStateType> = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});