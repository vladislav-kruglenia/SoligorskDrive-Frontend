import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StartStateOrderForm} from "./OrderForm.start-state";
import {
    EditDatePayload,
    EditDirectionPayload,
    EditIndexActiveTravelPayload,
    EditOrderingStagesPayload,
    EditSelectedHaltDataPayload,
    EditTravelInfoPayload,
    EditUserOrderDataPayload
} from "./Types/Actions.types";
import {getOrderPrice} from "./OrderForm.helper-functions";
import {Halts} from "./Classes/Halts.class";
import {DirectionsEnum, StepsIndexesEnum} from "../../AppGlobal/AppGlobalTypes/Enums";

const startState = new StartStateOrderForm().getStartState();

const orderFormReducer = createSlice({
    name: "OrderFormReducer",
    initialState: startState,
    reducers: {
        editDate(state, action: PayloadAction<EditDatePayload>) {
            state.selectedDate = action.payload.date;
            state.indexActiveTravel = null;
            state.orderSteps.indexActiveStep = StepsIndexesEnum.ChoiceRoute;
        },

        editDirection(state, action: PayloadAction<EditDirectionPayload>) {
            const {direction} = action.payload;
            state.selectedDirection = direction;
            state.indexActiveTravel = null;
            state.orderSteps.indexActiveStep = StepsIndexesEnum.ChoiceRoute
            /*state.orderSteps.indexActiveStep = direction === DirectionsEnum.none
                ? DirectionsIndexesEnum.ChoiceRoute
                : state.orderSteps.indexActiveStep
            */
        },

        editUserOrderData(state, action: PayloadAction<EditUserOrderDataPayload>) {
            const {userName, userPhone, userNumberSeats} = action.payload;
            state.userContacts = {
                isFilledUp: true,
                userPhone, userName
            };
            state.seats.userNumberSeats = userNumberSeats;
            state.prices.orderPrice = getOrderPrice(userNumberSeats, state.prices.tariffPrice)
        },

        editSelectedHaltData(state, action: PayloadAction<EditSelectedHaltDataPayload>) {
            const {selectedHaltLabel} = action.payload;
            const haltTime = new Halts().getHaltTime(selectedHaltLabel);
            state.haltData = {selectedHaltLabel, haltTime}
        },

        editTravelInfo(state, action: PayloadAction<EditTravelInfoPayload>) {
            const {startHourTravel, remainingNumberSeats, priceTravel} = action.payload;
            state.startHour = startHourTravel;
            state.seats.remainingNumberSeats = remainingNumberSeats;
            state.prices.tariffPrice = priceTravel
        },

        editIndexActiveStage(state, action: PayloadAction<EditOrderingStagesPayload>) {
            state.orderSteps.indexActiveStep = action.payload.indexActiveStep
        },

        editIndexActiveTravel(state, action: PayloadAction<EditIndexActiveTravelPayload>){
            state.indexActiveTravel = action.payload.indexActiveTravel
        },

        restartOrderForm(state){
            state.indexActiveTravel = null;
            state.orderSteps.indexActiveStep = StepsIndexesEnum.ChoiceRoute;
            state.selectedDirection = DirectionsEnum.none;
        },


    }
});

export const {
    editDate, editDirection, editUserOrderData,
    editSelectedHaltData, editTravelInfo, editIndexActiveStage,
    editIndexActiveTravel, restartOrderForm,
} = orderFormReducer.actions;


export default orderFormReducer.reducer