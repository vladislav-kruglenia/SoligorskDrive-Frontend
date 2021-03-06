import {combineReducers, configureStore, getDefaultMiddleware, Store} from "@reduxjs/toolkit";
import {AppStateType} from "../AppGlobal/AppGlobalTypes/Types";
import orderFormReducer from "./OrderForm/OrderForm.reducer";
import dispatcherPanelReducer from "./DispatcherPanel/DispatcherPanel.reducer";
import appReducer from "./App/App.reducer"


export const reducers = combineReducers({
    orderForm: orderFormReducer,
    dispatcherPanel: dispatcherPanelReducer,
    app: appReducer,
});

export const store:Store<AppStateType> = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});