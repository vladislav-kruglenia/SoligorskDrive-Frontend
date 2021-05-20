import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EditCurrentPagePayload, InitializePayload, LoginPayload} from "./Types/Actions.types";
import {AppStartState} from "./StartState/AppStartState";
import {NavBarPagesService} from "./StartState/Services/NavBarPagesService";
import {CurrentPageService} from "./StartState/Services/CurrentPageService";
import {RolesEnum} from "../../AppGlobal/AppGlobalTypes/Enums";


const appReducer = createSlice({
    name: 'appReducer',
    initialState: new AppStartState().getAppStartState(),
    reducers: {
        editCurrentPage(state, action: PayloadAction<EditCurrentPagePayload>) {
            state.currentPage = action.payload
        },
        initializeApp(state, action: PayloadAction<InitializePayload>) {
            state.isInitialized = true;
            state.isAuth = action.payload.isAuth;
        },
        logIn(state, action: PayloadAction<LoginPayload>) {
            const {userId, userRole} = action.payload;

            state.isAuth = true;
            state.userRole = userRole;
            state.userId = userId;
            state.navBarPages = new NavBarPagesService(userRole).navBarPages;
            state.currentPage = new CurrentPageService(state.navBarPages);
        },
        logOut(state) {
            state.isAuth = false;
            state.userRole = RolesEnum.None;
            state.userId = "";
        },
    }
});

export const {editCurrentPage, initializeApp, logIn, logOut} = appReducer.actions;

export default appReducer.reducer