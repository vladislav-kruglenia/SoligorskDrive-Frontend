import {DateTypes, StartStateType} from "./Types/DispatcherPanel.types";
import {DirectionsEnum} from "../../AppGlobal/AppGlobalTypes/Enums";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EditCurrentDatePayload, EditCurrentDirectionPayload, EditSortByValuePayload} from "./Types/Actions.types";

const startState: StartStateType = {
    currentDate: new Date(),
    currentDirection: DirectionsEnum.none,
    dateTypesDisplay:{
        dateString: '',
        timeString: '',
    },
    sortOrders:{
        byDate: false,
        byDirection: false,
        byTime: false,
    },
};

const dispatcherPanelReducer = createSlice({
    name: 'dispatcherPanelReducer',
    initialState: startState,
    reducers: {
        editCurrentDirection(state, action: PayloadAction<EditCurrentDirectionPayload>){
            state.currentDirection = action.payload.direction
        },
        editCurrentDate(state, action: PayloadAction<EditCurrentDatePayload>){
            const {date} = action.payload;
            const newDateTypes: DateTypes = {
                timeString: `${date.getTime()}`,
                dateString: `${date.getDate()}`
            };

            state.currentDate = action.payload.date;
            state.dateTypesDisplay = newDateTypes;

        },
        editSortByValue(state, action: PayloadAction<EditSortByValuePayload>){
            const {sortType} = action.payload;
            state.sortOrders[sortType] = !state.sortOrders[sortType]
        },
    }
});

export const {editSortByValue, editCurrentDate, editCurrentDirection} = dispatcherPanelReducer.actions;

export default dispatcherPanelReducer.reducer

