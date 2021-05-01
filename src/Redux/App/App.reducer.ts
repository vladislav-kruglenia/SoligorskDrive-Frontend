import {StartStateType} from "./Types/App.types";
import {AppLinks} from "../../AppGlobal/AppGlobalTypes/Links";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EditCurrentPagePayload} from "./Types/Actions.types";

const startState: StartStateType = {
    currentPage:{
        indexCurrentPage: 0,
        currentPageName: 'Оформление заказа',
    },

    navBarPages: [
        {pageLink: AppLinks.OrderForm, pageName: 'Оформление заказа'},
        {pageLink: AppLinks.OrdersHistory, pageName: 'История заказов'},
        {pageLink: AppLinks.UserProfile, pageName: 'Настройки профиля'},
        {pageLink: AppLinks.DispatcherPanel, pageName: 'Панель диспетчера'},
    ]
};

const appReducer = createSlice({
    name: 'appReducer',
    initialState: startState,
    reducers:{
        editCurrentPage(state, action: PayloadAction<EditCurrentPagePayload>){
            state.currentPage = action.payload
        }
    }
});

export const {editCurrentPage} = appReducer.actions;

export default appReducer.reducer