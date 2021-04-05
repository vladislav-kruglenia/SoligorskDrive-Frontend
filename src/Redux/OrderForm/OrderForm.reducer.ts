import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StartStateOrderForm} from "./OrderForm.start-state";
import {
    EditDatePayload,
    EditDirectionPayload,
    EditSelectedHaltDataPayload, EditOrderingStagesPayload,
    EditUserOrderDataPayload, EditStartHourPayload
} from "./Types/Actions.types";
import {getOrderPrice} from "./OrderForm.helper-functions";
import {Halts} from "./Classes/Halts.class";

const startState = new StartStateOrderForm().getStartState();

const orderFormReducer = createSlice({
    name: "OrderFormReducer",
    initialState: startState,
    reducers: {
        editDate(state, action: PayloadAction<EditDatePayload>){
            state.selectedDate = action.payload.date
        },
        
        editDirection(state, action: PayloadAction<EditDirectionPayload>){
            state.selectedDirection = action.payload.direction
        },
        
        editUserOrderData(state, action: PayloadAction<EditUserOrderDataPayload>){
            const {userName, userPhone, userNumberSeats} = action.payload;
            state.userContacts = {
                isFilledUp: true,
                userPhone, userName
            };
            state.seats.userNumberSeats = userNumberSeats;
            state.prices.orderPrice = getOrderPrice(userNumberSeats, state.prices.tariffPrice)
        },
        
        editSelectedHaltData(state, action: PayloadAction<EditSelectedHaltDataPayload>){
            const {selectedHaltLabel} = action.payload;
            const haltTime = new Halts().getHaltTime(selectedHaltLabel);
            state.haltData = {selectedHaltLabel, haltTime}
        },

        editIndexActiveStage(state, action: PayloadAction<EditOrderingStagesPayload>){
            state.orderSteps.indexActiveStep = action.payload.indexActiveStep
        },

        editStartHour(state, action: PayloadAction<EditStartHourPayload>){
            state.startHour = action.payload.startHour
        },

        
    }
});

export const {editDate,} = orderFormReducer.actions;



export default orderFormReducer.reducer