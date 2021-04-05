import {createSelector} from "@reduxjs/toolkit";
import {AppStateType} from "../../AppGlobal/AppGlobalTypes/Types";
import {UserOrderData} from "./Types/Actions.types";

const getDirection = (state: AppStateType) => state.orderForm.selectedDirection;
const getStartHour = (state: AppStateType) => state.orderForm.startHour;
const getDate = (state: AppStateType) => state.orderForm.selectedDate;
const getHaltData = (state: AppStateType) => state.orderForm.haltData;
const getRemainingNumberSeats = (state: AppStateType) => state.orderForm.seats.remainingNumberSeats;
const getTariffPrice = (state: AppStateType) => state.orderForm.prices.orderPrice;
const getOrderSteps = (state: AppStateType) => state.orderForm.orderSteps;


const getUserOrderData = (state: AppStateType):UserOrderData => {
    const orderForm = state.orderForm;
    const {userName, userPhone} = orderForm.userContacts;
    return {
        userNumberSeats: orderForm.seats.userNumberSeats,
        userName, userPhone
    }
};


export const getDirectionSelector = createSelector(getDirection, data => data);
export const getStartHourSelector = createSelector(getStartHour, data => data);
export const getDateSelector = createSelector(getDate, data => data);
export const getHaltDataSelector = createSelector(getHaltData, data => data);
export const getUserOrderDataSelector = createSelector(getUserOrderData, data => data);
export const getRemainingNumberSeatsSelector = createSelector(getRemainingNumberSeats, data => data);
export const getTariffPriceSelector = createSelector(getTariffPrice, data => data);
export const getOrderStepsSelector = createSelector(getOrderSteps, data => data);
