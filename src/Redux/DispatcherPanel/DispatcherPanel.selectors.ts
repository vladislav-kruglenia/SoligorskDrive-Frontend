import {AppStateType} from "../../AppGlobal/AppGlobalTypes/Types";
import {createSelector} from "reselect";

const getDirection = (state: AppStateType) => state.dispatcherPanel.currentDirection;
const getDate = (state: AppStateType) => state.dispatcherPanel.currentDate;
const getSortOrders = (state: AppStateType) => state.dispatcherPanel.sortOrders;
const getDateTypesDisplay = (state: AppStateType) => state.dispatcherPanel.dateTypesDisplay;



export const getDirectionSelector = createSelector(getDirection, data => data);
export const getDateSelector = createSelector(getDate, data => data);
export const getSortOrdersSelector = createSelector(getSortOrders, data => data);
export const getDateTypesDisplaySelector = createSelector(getDateTypesDisplay, data => data);