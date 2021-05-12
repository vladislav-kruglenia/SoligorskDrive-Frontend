import {AppStateType} from "../../AppGlobal/AppGlobalTypes/Types";
import {createSelector} from "@reduxjs/toolkit";

const getNavBarPages = (state: AppStateType) => state.app.navBarPages;
const getCurrentPageData = (state: AppStateType) => state.app.currentPage;
const getIsInitialized = (state: AppStateType) => state.app.isInitialized;
const getIsAuth = (state: AppStateType) => state.app.isAuth;
const getUserId = (state: AppStateType) => state.app.userId;



export const getNavBarPagesSelector = createSelector(getNavBarPages, data => data);
export const getCurrentPageDataSelector = createSelector(getCurrentPageData, data => data);
export const getIsInitializedSelector = createSelector(getIsInitialized, data => data);
export const getIsAuthSelector = createSelector(getIsAuth, data => data);
export const getUserIdSelector = createSelector(getUserId, data => data);