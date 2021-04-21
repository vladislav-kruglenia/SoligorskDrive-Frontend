import {AppStateType} from "../../AppGlobal/AppGlobalTypes/Types";
import {createSelector} from "@reduxjs/toolkit";

const getNavBarPages = (state: AppStateType) => state.app.navBarPages;
const getCurrentPageData = (state: AppStateType) => state.app.currentPage;

export const getNavBarPagesSelector = createSelector(getNavBarPages, data => data);
export const getCurrentPageDataSelector = createSelector(getCurrentPageData, data => data);